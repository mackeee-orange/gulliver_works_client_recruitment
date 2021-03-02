import { useCurrentAccount } from "../../hooks/useCurrentAccount";
import { Account } from "../../data/Account";
import { HttpClient } from "../../utilities/axiosInstance";

export type SignInParams = {
  account: {
    email: string;
    password: string;
  };
};

export type SignInPayload = {
  account: Account;
  token: string;
};

export function useSignInPresenter() {
  const { setAccount } = useCurrentAccount();
  const signIn = async (data: SignInParams) => {
    try {
      const res = await HttpClient.request<SignInPayload>({
        method: "POST",
        url:
          "https://1134932e-a443-49eb-8dd6-764a9db8d7bc.mock.pstmn.io/sign_in",
        data: data,
      });
      localStorage.setItem("GULLIVER_WORKS_AUTH_TOKEN", res.data.token);
      setAccount(res.data.account);
    } catch (e) {
      console.error(e);
    }
  };

  return { signIn };
}
