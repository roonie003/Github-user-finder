class Github {
    constructor() {
        this.client_id = '7030899f37bc99b690c6';
        this.client_secret = 'a63554060fbaa0fb7aa3db0bb77eaf3c63352fcf';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    //get user 

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    
    }
}