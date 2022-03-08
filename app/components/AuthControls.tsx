import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "remix";
import { useAuth } from "~/state/AuthProvider";
import { SignOutButton } from "~/components/SignOutButton";
import { LogoutForm } from "~/components/LogoutForm";

export default function SignInUp() {
  const user = useAuth();
  return user === null ? (
    <Box>
      <Button component={Link} to="/sign/in">
        sign in
      </Button>
      <Button
        sx={{ marginLeft: 2 }}
        component={Link}
        to="/sign/up"
        color="secondary"
      >
        sign up
      </Button>
    </Box>
  ) : (
    <Box>
      <LogoutForm>
        <SignOutButton type="submit" color="secondary">
          sign out
        </SignOutButton>
      </LogoutForm>
    </Box>
  );
}
