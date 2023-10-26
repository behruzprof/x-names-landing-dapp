import { BButton } from "@/shared/ui";
import { styled } from "@mui/material";
import { FormInput } from "./FormInput";
import axios from "axios";
import { toast } from "react-toastify";

type FormData = {
  companyName: string;
  email: string;
  firstName: string;
  lastName: string;
};

export const PresaleForm = () => {
  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault();

      const toastId = toast.info("Processing...");

      const data = getFormData(e.target) as FormData;
      const dataToPost = {
        Email: data.email,
        Company: data.companyName,
        "First name": data.firstName,
        "Last name": data.lastName,
      };

      const url =
        "https://sheet.best/api/sheets/f087169f-14b3-49f4-a36e-058fc241f828" as string;

      await axios.post(url, dataToPost);

      toast.success("Successful.");
      toast.dismiss(toastId);
    } catch (error: any) {
      toast.dismiss();
      toast.error(error.message ?? "An error occured.");
      console.log(error);
    }
  };

  const getFormData = (form: HTMLFormElement) => {
    const elements = Array.from(form.elements) as HTMLInputElement[];

    return elements.reduce((acc, el) => {
      if (!el.name) return acc;

      return { ...acc, [el.name]: el.value };
    }, {} as Record<string, any>);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormInput name="email" type="email" label="Email" />
      <FormInput name="companyName" label="Company name" />
      <FormInput name="firstName" label="First name" />
      <FormInput name="lastName" label="Last name" />

      <BButton
        variant="contained"
        color="primary"
        type="submit"
        sx={{
          width: "100%",
          padding: "15px 0",
          fontSize: "16px",
          fontWeight: "700",
          height: "48px",
          borderRadius: "6px",
          mt: "30px",
        }}
      >
        Submit
      </BButton>
    </Form>
  );
};

const Form = styled("form")`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: min(700px, 100%);
  margin-top: 40px;

  & > * {
    /* flex-basis: 45%; */
    flex-grow: 1;
  }
`;
