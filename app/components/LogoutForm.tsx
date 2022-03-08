import { forwardRef } from "react";
import { Form, FormProps } from "remix";

export const LogoutForm = forwardRef<HTMLFormElement, FormProps>(
  (props, ref) => <Form ref={ref} action="/logout" method="post" {...props} />
);
