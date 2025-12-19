import { expect, type Locator, type Page } from "playwright/test"
import BaseCommands from "../utils/BaseCommands"
import { loginPageLocators } from "../Locators/loginPageLocators"
export class LoginPage {
  readonly page: Page
  getuserName: Locator
  getpassword: Locator
  getLoginButton: Locator
  basecommands: BaseCommands
  constructor(page: Page) {
    this.page = page
    this.getuserName = page.locator(loginPageLocators.getuserName)
    this.getpassword = page.locator(loginPageLocators.getpassword)
    this.getLoginButton = page.locator(loginPageLocators.getLoginButton)
    this.basecommands = new BaseCommands()
  }

  async goToUrl() {
    await this.page.goto("https://adactinhotelapp.com/")
  }

  async loginToTheApplication(username: string, password: string) {
    await this.basecommands.inputValueElement(this.getuserName, username)
    await this.basecommands.inputValueElement(this.getpassword, password)
    await this.basecommands.click(this.getLoginButton, "click")
  }

  async verifyTitle() {
    const title = await this.page.title
    await console.log(title)
    expect(title).toEqual("Log in to Facebook")
  }
}
