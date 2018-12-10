import fetch from "isomorphic-fetch"
import Error from "next/error"

class Index extends React.Component {
    static async getInitialProps () {

        let stories

        try {
            const respose =  await fetch('https://node-hnapi.herokuapp.com/news?page=1')
            stories = await respose.json()
        }catch (err) {
            console.log(err)
            stories = []
        }

        return {stories}
    }

    render () {
        const {stories} = this.props

        if(stories.length == 0) {
            return <Error statusCode={503}/>
        }

        return (
            <div>
                Hacker next
            </div>
        )
    }
}

export default Index