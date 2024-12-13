import LoadingButton from "@mui/lab/LoadingButton";
import Container from "@mui/material/Container";
// or

function Loading() {
  return (
    <Container fixed maxWidth="sm">
      <LoadingButton loading={true} loadingPosition="center" />
    </Container>
  );
}

export default Loading;
