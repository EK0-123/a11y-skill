import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const fixtureUrl = pathToFileURL(resolve(__dirname, 'fixtures/images.html')).href;

test.beforeEach(async ({ page }) => { await page.goto(fixtureUrl); });

test('aucune violation axe-core détectée sur la fixture', async ({ page }) => {
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});

test('image informative : alt présent et non vide (contrat de la fixture)', async ({ page }) => {
  await expect(page.getByTestId('informative')).toHaveAttribute('alt', /\S/);
});

test('image décorative : alt exactement vide (classification déjà validée)', async ({ page }) => {
  await expect(page.getByTestId('decorative')).toHaveAttribute('alt', '');
});

test('lien image : nom accessible défini', async ({ page }) => {
  await expect(page.getByTestId('logo-link')).toHaveAccessibleName('Banque Exemple — accueil');
});

test('bouton image : activation clavier avec Entrée et Espace', async ({ page }) => {
  const button = page.getByRole('button', { name: 'Afficher les détails' });
  for (const key of ['Enter', 'Space']) {
    await page.locator('#detail-result').evaluate(el => { (el as HTMLElement).hidden = true; });
    await button.focus();
    await page.keyboard.press(key);
    await expect(page.locator('#detail-result')).toBeVisible();
  }
});
