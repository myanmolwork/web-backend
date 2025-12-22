import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()
app.use({
    cors:process.env.CORS_origin,
    credentials:true
}
)
app.use(express.json({
    limit:"16kb"
}))

app.use(expree.urlencoded(
    {
        extended:true,
        limit:'16kb'
    }
)
)
app.use(expree.static("public"))

app.use(cookieParser())
