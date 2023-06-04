import { Box, Button, Link, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { changeEmail, changePassword, logIn } from "../redux/authSlice";

export default function SignIn() {
  const email = useSelector((state) => state.auth.email);
  const password = useSelector((state) => state.auth.password);

  const isLoading = useSelector((state) => state.auth.isLoading);

  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    dispatch(changeEmail(e.currentTarget.value));
  };

  const handlePasswordChange = (e) => {
    dispatch(changePassword(e.currentTarget.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        Giriş yap
      </Typography>
      <TextField
        fullWidth
        margin="normal"
        label="Email Adresi"
        required
        autoComplete="email"
        autoFocus
        value={email}
        onChange={handleEmailChange}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Şifre"
        required
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <Button
        type="submit"
        variant="contained"
        disabled={isLoading}
        fullWidth
        sx={{ mt: 2 }}
      >
        {isLoading ? "Yükleniyor ..." : "Giriş yap"}
      </Button>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 4,
        }}
      >
        <Link component={RouterLink} to="../forgot-password">
          Şifremi unuttum.
        </Link>
        <Link component={RouterLink} to="../sign-up">
          Hesabın yok mu? Kaydol!
        </Link>
      </Box>
    </form>
  );
}
