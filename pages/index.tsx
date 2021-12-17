import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Grid from '@material-ui/core/Grid'
import { HeadPage } from '../components/Head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import 'react-quill/dist/quill.snow.css';
 
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

interface IProps{
  content: string;
}

const Home = (data: IProps) => {
  const [content, setContent] = useState<string>('');

  const OnBlurForm = () => {
    submitContent()
  }

  const submitContent = async () => {
    const response = await fetch('/api/next-cloud', {
      method: 'POST',
      body: JSON.stringify({ content: content }),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const data = await response.json();
    setContent(data);
  }

  useEffect(()=> {
    setContent(data?.content!)
  },[])

  return (
    <div>
      <HeadPage/>
      <Navbar />
      <Grid>
        <ReactQuill 
          theme="snow" 
          value={content} 
          onChange={setContent}
          onBlur={()=> OnBlurForm()}
        />
      </Grid>

        <Footer/>

    </div>
  )
}

export default Home

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/next-cloud')
  const data = await res.json()

  return {
    props: data,
  }
}
