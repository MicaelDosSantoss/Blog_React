import './ViewPostPage.css'; //CSS Page
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../../../src/services/api'


const ViewPostPage = (props) => {
    const [post, setPost] = useState({})
    const { id } = useParams();


    useEffect(async () => {
        const resposta = await api.get(`/posts/${id}`)
        const postResult = resposta.data
        setPost(resposta.data)
    }, [])




    return (
        <main>

         <h1>{post.title}</h1>
              
         <p>
           {post.createdAt}
         </p>

          <p>
            {post.description}
         </p>

        </main>
    )
}

export default ViewPostPage