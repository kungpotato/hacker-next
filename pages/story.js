import fetch from "isomorphic-fetch"
import Error from "next/error"
import Layout from "../components/Layout"

class Story extends React.Component {

    static async getInitialProps({req, res, query}) {

        let story

        try{
            const storyId = query.id
            const respose =  await fetch(`https://node-hnapi.herokuapp.com/item/${storyId}`)
            story = await respose.json()
        }catch(err){
            console.log(err)
            story = null
        }

        return {story}

    }

    render () {
        const {story} = this.props

        if(!story){
            return <Error statusCode={503}/>
        }

        return (
            <Layout title={story.title}>
                <main>
                    <h1><a href={story.url}>{story.title}</a></h1>
                    <div className="story-details">
                        <strong>{story.points} points</strong>
                        <strong>{story.comments_count} comments</strong>
                        <strong>{ story.time_ago}</strong>
                    </div>
                </main>
            </Layout>
        )
    }
}

export default Story