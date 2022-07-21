import * as React from "react";
import { useTranslation } from "react-i18next";
import {
  AccountPageContainer,
  AccountTitle,
  CustomHR,
  DynamicSpace,
  LogoutButton,
  SignupButton,
  UserInfo,
  UserName,
} from "../src/components/AccountPage/AccountPage.styled";
import { CustomDropdown } from "../src/components/AccountPage/CustomDropdown";
import { CustomInput } from "../src/components/AccountPage/CustomInput";
import i18n from "../src/i18n";
import { IDropdownOption } from "../src/types/IDropdownOption";

interface AccountPageProps {}

const locales: IDropdownOption[] = [
  { value: "tr", label: "Türkçe" },
  { value: "en", label: "English" },
];

const AccountPage: React.FC<AccountPageProps> = () => {
  const { t } = useTranslation();

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [state, setState] = React.useState({
    email: "",
    password: "",
    locale: "TR",
  });

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prev) => ({
      ...prev,
      email: e.target.value,
    }));
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prev) => ({
      ...prev,
      password: e.target.value,
    }));
  };
  const handleChangeLocale = (value: string) => {
    i18n.changeLanguage(value);
    setState((prev) => ({
      ...prev,
      locale: value,
    }));
  };

  const handleLogin = () => {
    localStorage.setItem("user", JSON.stringify(state));
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.setItem("user", "");
    setIsLoggedIn(false);
  };

  React.useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
      setState(JSON.parse(user));
    }
  }, []);

  return (
    <AccountPageContainer>
      <AccountTitle>{t("Account")}</AccountTitle>

      {isLoggedIn ? (
        <>
          <UserName>Irmak Esin</UserName>
          <UserInfo>
            {t("Email")}: {state.email}
          </UserInfo>
          <UserInfo>
            {t("Password")}: {state.password}
          </UserInfo>
          <UserInfo>
            {t("CurrentLocale")}:{" "}
            {locales.find((x) => x.value == state.locale)?.label}
          </UserInfo>
          <CustomHR />
        </>
      ) : (
        <>
          <CustomInput
            type="text"
            value={state.email}
            onChange={handleChangeEmail}
            label={t("Email")}
          />
          <CustomInput
            type="password"
            value={state.password}
            onChange={handleChangePassword}
            label={t("Password")}
          />
        </>
      )}

      <CustomDropdown
        value={state.locale}
        onChange={handleChangeLocale}
        label={t("Locale")}
        options={locales}
      />

      {isLoggedIn ? (
        <>
          <DynamicSpace />
          <LogoutButton onClick={handleLogout}>{t("Logout")}</LogoutButton>
        </>
      ) : (
        <SignupButton disabled={state.email.length == 0} onClick={handleLogin}>
          {t("Signup")}
        </SignupButton>
      )}
    </AccountPageContainer>
  );
};

export default AccountPage;
