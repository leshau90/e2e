// @ts-check
require('dotenv').config()
const { test, expect } = require('@playwright/test');

test('fills in username and password and submits the form', async ({page}) => {
	await page.goto(process.env.URL_PENGAWAS);

    // Find the username input field and type a username
	await page.fill('#username-pengawas', process.env.USERNAME_PENGAWAS);

    // Find the password input field and type a password
	await page.fill('#password-pengawas',  process.env.PASSWORD_PENGAWAS);

    // Submit the form
	await page.click('#submit-kredensial-pengawas');
	await page.click('#view-ujian');
	await page.click('#pilih-ujian-0');
	await page.click('#view-home');
	await page.click('#view-token');
	await page.click('#view-absensi');
	await page.check('#cek-hadir-0')
  });


