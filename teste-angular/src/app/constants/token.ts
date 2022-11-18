const tokenUrl = (code: string) => {
  const redirectUrl = `http://127.0.0.1:3000/authorized&grant_type=authorization_code&code=${code}&code_verifier=6b9daae4-34c6-4738-a287-cbdf2cd9b3ce`;
  return `http://localhost:8080/oauth2/token?client_id=client&redirect_uri=${redirectUrl}`;
};

export default tokenUrl;
