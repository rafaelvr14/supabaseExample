const { createClient } = require("@supabase/supabase-js");
require('dotenv').config()
const URL = "https://mgoisvoorqohewgpzjix.supabase.co"
const database = async () => {
  const supabase = createClient(
    URL,
    process.env.SECRET_PUBLIC
  );
  const { data, error } = await supabase
    .from("emailLogin")
    .insert({ email: "zoesrafael@gmail.com" });
  console.log(data, error);
};
const authFront = {
  login: async () => {
    const supabase = createClient(
      URL,
      process.env.SECRET_PUBLIC
    );
    let { user, error } = await supabase.auth.signIn({
      email: "zoesrafael@gmail.com",
      password: "teste1234",
    });
    console.log(user, error);
  },
  createUser: async () => {
    const supabase = createClient(
      URL,
      process.env.SECRET_PUBLIC
    );
    let { user, error } = await supabase.auth.signUp({
      email: "zoesrafael@gmail.com",
    });
    console.log(user, error);
  }
}
const authServer = {
  searchUsers: async() => {
    const supabase = createClient(
      URL,
      process.env.SECRET_SERVER
    );
    const { data: user, error } = await supabase.auth.api.listUsers();
    console.log(user, error);
  },
  createUserServer: async() =>{
    const supabase = createClient(
      URL,
      process.env.SECRET_SERVER
    );
    const { data: user, error } = await supabase.auth.api.createUser({
      email: 'user@email.com',
      password: 'password',
      user_metadata: { name: 'Yoda' },
    })
    console.log(user, error)
  },
  deleteUser: async()=>{
    const supabase = createClient(
      URL,
      process.env.SECRET_SERVER
    );
    const { data: user, error } = await supabase.auth.api.deleteUser(
      '399656bd-b1c5-4328-91aa-f2bec12916ec'
    )
    console.log(user, error)
  },
  generateInviteLink: async() =>{
    const supabase = createClient(
      URL,
      process.env.SECRET_SERVER
    );
    const { data: user, error } = await supabase.auth.api.generateLink(
      'invite',
      'zoes_rafael@hotmail.com'
    )
    console.log(user, error)
  },
  inviteByEmail: async() => {
    const supabase = createClient(
      URL,
      process.env.SECRET_SERVER
    );
    const { data: user, error } = await supabase.auth.api.inviteUserByEmail(
      'zoesrafael@gmail.com'
    )
    console.log(user, error)
  },
  updateUser: async() => {
    const supabase = createClient(
      URL,
      process.env.SECRET_SERVER
    );
    const { data: user, error } = await supabase.auth.api.updateUserById(
      '399656bd-b1c5-4328-91aa-f2bec12916ec',
      { email: 'new@email.com' }
    )
    console.log(user, error)
  }

}
searchUsers();
