import Layout from "../components/layout";
import Smartie from "../components/smartie";
import SignUpForm from "../components/sign-up-form";
export default function Form() {
  // TODO: Replace with Nextjs form + Notion + Notifications
  return (
    <Layout>
      <Smartie />
      <div className="h-screen mt-10 ">
        <iframe
          className="w-full h-full"
          src="https://notionforms.io/forms/slt-subscription-form"
        />
      </div>

      {/* <SignUpForm /> */}
    </Layout>
  );
}
