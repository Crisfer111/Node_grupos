import{ Router } from "express"

const router = Router()


router.get('/', (req,res) => res.render('index',{ title: 'Bienvenido Al Index'}))
router.get('/about', (req,res) => res.render('about', { title: 'Pagina About Me'}))
router.get('/contact', (req,res) => res.render('contact', { title: 'Pagina Contact Me'}))

export default router