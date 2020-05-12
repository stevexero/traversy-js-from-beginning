class Github {
  constructor() {
    this.client_id = '9c21857a2ad87ff3a03f';
    this.client_secret = '1e5de29a0a0f333486801ab2ecb401183544d374';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile
    };
  }
}
