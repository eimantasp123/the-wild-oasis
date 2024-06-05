import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSignup } from "./useSignup";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { signup, isLoading } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ fullName, email, password }) {
    console.log(errors?.email);
    if (!fullName || !email || !password) return;
    signup(
      { fullName, email, password },
      {
        onSettled: () => reset(),
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <Input
          disable={!isLoading && false}
          type="text"
          id="fullName"
          {...register("fullName", {
            reguired: "This field is required",
            min: {
              value: 1,
            },
          })}
        />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input
          disable={!isLoading && false}
          type="email"
          id="email"
          {...register("email", {
            reguired: "This field is required",
            pattern: { value: /\S+@\S+\.\S+/, message: "Please providee a valid email address" },
          })}
        />
      </FormRow>

      <FormRow label="Password (min 8 characters)" error={errors?.password?.message}>
        <Input
          disable={!isLoading && false}
          type="password"
          id="password"
          {...register("password", {
            reguired: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
      </FormRow>

      <FormRow label="Repeat password" error={errors?.passwordConfirm?.message}>
        <Input
          disable={!isLoading && false}
          type="password"
          id="passwordConfirm"
          {...register("passwordConfirm", {
            reguired: "This field is required",
            validate: (value) => value === getValues().password || "Passwords need to match",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button onClick={reset} disable={!isLoading && false} variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disable={!isLoading && false}>Create new user</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
