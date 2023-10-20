import { faker } from '@faker-js/faker'

class ContactPage {
  get contactPageButton() {
    return $("#menu-item-493");
  }

  get firstNameField() {
    return $("#evf-277-field_ys0GeZISRs-1");
  }

  get emailField() {
    return $("#evf-277-field_LbH5NxasXM-2");
  }
  get phoneField() {
    return $("#evf-277-field_66FR384cge-3");
  }

  get messageField() {
    return $("#evf-277-field_yhGx3FOwr2-4");
  }

  get btnSubmit(){
    return $("#evf-submit-277")
  }

  async createAndSubmitForm() {
    await this.firstNameField.setValue(faker.person.firstName());
    await this.emailField.addValue(faker.internet.email());
    await this.phoneField.setValue("1234567890");
    await this.messageField.addValue(faker.lorem.paragraph());
    await expect(this.btnSubmit).toBeClickable();
    await this.btnSubmit.click();
  }
}

export default new ContactPage();
