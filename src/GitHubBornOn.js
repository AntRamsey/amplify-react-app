

export const GitHubBornOn = ({user})  => {
    return (
        <h3>
            Github user {user.login} was born on {user.created_at}
        </h3> 
    )

}
