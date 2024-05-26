import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="contactContainer">
      <h2>Contact</h2>
      <div className="contactBloc">
        <form>
          <div className="row formRow">
            <div className="firstNameInput">
              <input
                type="text"
                className="form-control formInput"
                placeholder={t("common.translated-first")}
                {...register("Prénom", { required: true })}
              />
            </div>
          </div>
          <div className="row formRow">
            <div className="lastNameInput">
              <input
                type="text"
                className="form-control formInput"
                placeholder={t("common.translated-last")}
                {...register("Nom", { required: true })}
              />
            </div>
          </div>
          <div className="row formRow">
            <div className="emailInput">
              <input
                type="text"
                className="form-control formInput"
                placeholder={t("common.translated-mail")}
                {...register("Email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
            </div>
          </div>
          <div className="row formRow">
            <div className="phoneInput">
              <input
                type="tel"
                className="form-control formInput"
                placeholder={t("common.translated-number")}
                {...register("Téléphone", {
                  required: true,
                  maxLength: 12,
                  pattern: /^\S+@\S+$/i,
                })}
              />
            </div>
          </div>
          <div>
            <div className="row formRow">
              <div className="messageInput">
                <textarea
                  rows={3}
                  className="form-control formInput"
                  placeholder="Message*"
                  {...register("Message", { required: true })}
                />
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
