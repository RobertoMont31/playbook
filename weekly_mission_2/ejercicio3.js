class repo {
    constructor(name, author, language, numberOfComits, forks, issues_open, issues_close){
        this.name = name
        this.author = author
        this.language = language
        this.numberOfComits = numberOfComits
        this.forks = forks
        this.issues_open = issues_open
        this.issues_close = issues_close
    }
    getTotalIssues(){
        return`This repository has: ${this.issues_open} open issues`
    }
    getGeneralInfo(){
        return `The Repo ${this.name} was created by: ${this.author}`
    }
}

class issue {
    constructor(title, repoNameAsso, status, numberOfComments, labels, author, dateCreated, lastUpdate){
        this.title = title
        this.repoNameAsso = repoNameAsso
        this.status = status
        this.labels = labels
        this.author  = author
        this.dateCreated = dateCreated
        this.lastUpdate =lastUpdate
        this.numberOfComments = numberOfComments
    }
    getTitleAndAuthor (){
        return `The author of the Issue "${this.title}" is: ${this.author}`
    }
    getGeneralInfo (){
        return ` Thiss Issue is ${this.status}\nWas created on: ${this.dateCreated} and hasn't been updated since: ${this.lastUpdate}`
    }
}

class PullRequest {
    constructor(title, branchName, dateCreated, status, repoNameAsso){
        this.title = title
        this.branchName = branchName
        this.status = status
        this.repoNameAsso = repoNameAsso
    }
    getStatus (){
        return `The status of this pull request is: ${this.status}`
    }
    getGeneralInfo (){
        return ` The author of the pull request ${this.title} is: ${this.author}`
    }
}