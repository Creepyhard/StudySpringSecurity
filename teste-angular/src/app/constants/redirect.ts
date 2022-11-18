const redirectUrl = () => {
  const redirectUri = 'http://127.0.0.1:3000/authorized&code_challenge=xtbg1sfqjYHrMQUmMScavPKMYVgr9BAF6A1OoGKu1iQ&code_challenge_method=S256';
  return `http://localhost:8080/oauth2/authorize?response_type=code&client_id=client&scope=openid&redirect_uri=${redirectUri}`;
}

export default redirectUrl;
