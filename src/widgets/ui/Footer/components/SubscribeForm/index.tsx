import { media } from "@/shared/styles/media";
import { BButton } from "@/shared/ui";
import { styled } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

export const SubscribeForm = () => {
  const [email, setEmail] = useState("");

  const getEmails = async (url: string) => {
    try {
      const res = await axios.get(url);
      return res.data as { Email: string }[];
    } catch (error) {
      console.log("Error");
      return [];
    }
  };

  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault();

      const toastId = toast.info("Processing...");

      const url =
        process.env.NEXT_PUBLIC_WAITLIST_SHEET ??
        "https://sheet.best/api/sheets/54347eea-5b37-456b-a966-6c15fbed474e";

      const emails = await getEmails(url);

      if (emails.find((e) => e.Email === email)) {
        toast.info("You've already subscribed. Thank you.");
        toast.dismiss(toastId);
        return;
      }

      await axios.post(url, { Email: email });

      toast.success("Successful.");
      toast.dismiss(toastId);

      setEmail("");
    } catch (error: any) {
      toast.dismiss();
      toast.error(error.message ?? "An error occured.");
      console.log(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="email"
        name="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <StyledButton
        variant="contained"
        color="primary"
        type="submit"
        children="Subscribe"
        sx={{
          width: "168px",
          height: "46px",
          padding: "8px 16px",
          fontSize: "15px",
          lineHeight: "30px",
          fontWeight: "600",
          borderRadius: "24px",
        }}
      />
    </Form>
  );
};

const Form = styled("form")`
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
  width: min(600px, 100%);

  ${media.md} {
    margin-block-start: 20px;
  }

  ${media.sm} {
    flex-direction: column;
  }
`;

const Input = styled("input")`
  font-family: Inter;
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: -0.02em;
  text-align: left;
  background-color: inherit;
  border: none;
  outline: none;
  color: #ffffff;
  padding: 10px;
  padding-inline-start: 20px;
  background: #121212;
  border: 1px solid #232323;
  border-radius: 16px;
  height: 79px;
  width: 100%;

  &::placeholder {
    color: #ffffff;
  }
`;

const StyledButton = styled(BButton)`
  position: absolute;
  right: 10px;

  ${media.sm} {
    position: static;
  }
`;
