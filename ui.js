class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    //Display profile in UI

    showProfile(user){
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                   
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" 
                        class="btn btn-primary btn-block mb-4">View Profile</a>
                    </div>
                        
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos: 
                        ${user.public_repos}</span>
                        <span class="badge badge-secondary">Public Gist:
                         ${user.public_gist}</span>
                        <span class="badge badge-success">Public Followers: 
                        ${user.followers}</span>
                        <span class="badge badge-info">Public Following: 
                        ${user.following}</span>
                    
                    <br><br>

                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company} </li>
                            <li class="list-group-item">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${user.created_at} </li>
                        </ul>
                     </div>
                </div>
            </div>
            <h3 class="page=heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
            `

    }

 // Show user repos
 showRepos(repos) {
    let output = '';

    repos.forEach(function(repo) {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
            <span class="badge badge-success">Forks: ${repo.forms_count}</span>
            </div>
          </div>
        </div>
      `;
    });

    // Output repos
    document.getElementById('repos').innerHTML = output;
  }




//Show alert message
    
    showAlert(message, className){
        //clear any remaining alerts
        this.clearAlert();

//create div
        const div = document.createElement('div');

        //add classes
        div.className = className;

        // add text
        div.appendChild(document.createTextNode(message));

        //get parent
        const container = document.querySelector('.searchContainer');

        //get the search box
        const search = document.querySelector('.search');

        //insert alert
        container.insertBefore(div, search);

        //time-out after 3 sec

        setTimeout(()=> {
            this.clearAlert();
        }, 3000);
    }

    //clear alert message

    clearAlert(){
        const currentAlert = document.querySelector('.alert');

        if(currentAlert){
            currentAlert.remove();
        }
    }
//clear profile

    clearProfile() {
        this.profile.innerHTML = '';
    }
}