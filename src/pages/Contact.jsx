import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  return (
    <div className="contactContainer">
      <h2>Contact</h2>
      <div className="contactBloc">
        <form>
          <div className="row formRow">
            <div className="firstNameInput">
              <input
                type="text"
                name="name"
                className="form-control formInput"
                placeholder={t("common.translated-first")}
              ></input>
            </div>
          </div>
          <div className="row formRow">
            <div className="lastNameInput">
              <input
                type="text"
                name="Lastname"
                className="form-control formInput"
                placeholder={t("common.translated-last")}
              ></input>
            </div>
          </div>
          <div className="row formRow">
            <div className="emailInput">
              <input
                type="email"
                name="email"
                className="form-control formInput"
                placeholder={t("common.translated-mail")}
              ></input>
            </div>
          </div>
          <div className="row formRow">
            <div className="phoneInput">
              <input
                type="text"
                name="phone"
                className="form-control formInput"
                placeholder={t("common.translated-number")}
              ></input>
            </div>
          </div>
          <div>
            <div className="row formRow">
              <div className="messageInput">
                <textarea
                  rows={3}
                  name="message"
                  className="form-control formInput"
                  placeholder="Message*"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="submitButton">
            <button type="submit">{t("common.translated-submit")}</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
