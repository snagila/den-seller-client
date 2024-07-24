import React, { useEffect, useState } from "react";
import { Container, Spinner, Stack } from "react-bootstrap";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { verifyUser } from "../../axios/userAxios";
import { toast } from "react-toastify";

const VerifyEmailPage = () => {
  const [emailVerifying, setEmailVerifying] = useState(true);
  const [emailVerified, setEmailVerified] = useState(false);
  const navigate = useNavigate();

  // grab the url params
  const [params] = useSearchParams();
  const userEmail = params.get("e");
  const token = params.get("id");

  // function to verify email
  const verifyEmail = async () => {
    const result = await verifyUser({ userEmail, token });
    setEmailVerifying(false);

    // if user is not verified
    if (result.status === "error") {
      toast.error(result.message);
      navigate("/signup");
      return;
    }
    setEmailVerified(true);
  };

  useEffect(() => {
    verifyEmail();
  }, [verifyEmail]);
  return (
    <>
      <Container>
        {emailVerifying && (
          <Stack
            gap={4}
            className="vh-100 justify-content-center align-items-center"
          >
            <Spinner animation="border" variant="primary" role="status" />
            <p>Verifying email, Please Wait...</p>
          </Stack>
        )}
        {emailVerified && (
          <Stack
            gap={2}
            className="vh-100 justify-content-center align-items-center"
          >
            <div className="my-4">
              <lord-icon
                src="https://cdn.lordicon.com/twsqddew.json"
                trigger="in"
                delay="100"
                state="in-reveal"
                style={{ width: "250px", height: "250px" }}
              ></lord-icon>
            </div>

            <p>Email successfully verified, You can login now.</p>

            <Link to="/" className="btn btn-lg btn-outline-primary">
              Login Now
            </Link>
          </Stack>
        )}
      </Container>
    </>
  );
};

export default VerifyEmailPage;
