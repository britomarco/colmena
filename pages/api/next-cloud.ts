// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import Client, { File, Folder, Server} from "nextcloud-node-client";

const server: Server = new Server(
  { basicAuth:
      { password: "makena123",
        username: "makena@colmena.network",
      },
      url: "https://claudio.colmena.network",
  });

const uploadFile = async (content: string)  =>{
  try {
    const client = new Client(server);
    const folder: Folder = await client.createFolder("testemarco");
    const file: File = await folder.createFile("marco1.txt", Buffer.from(content));

} catch (e) {
    return e;
  }
}

const getContent = async () => {
  try {
    const client = new Client(server);
    const file = await client.getFile("/testemarco/marco1.txt");
    const buffer = await file?.getContent();
    return buffer;
  } catch (error) {
    return error;
  }

}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if(req.method === 'GET'){
    const data = getContent().then(item=> item)
    let objJson = ''
    data.then((item: any) => {
      objJson = item.toString('utf8')
      return objJson;
    }).finally(()=> {
      res.status(200).json({ content: objJson})
    })
  } else if (req.method === 'POST'){
    const body = req.body.content;
    const data = uploadFile(body).then(data => data);
    res.status(201).json(body)
  }
}
