import{ Router } from "express"

const router = Router()


router.get('/', (req,res) => res.render('index',{ title: 'Bienvenido Al Index'}))
router.get('/about', (req,res) => res.render('about', { title: 'Informacion'}))
router.get('/contact', (req,res) => res.render('contact', { title: 'Contacto'}))
router.get('/acerca', (req,res) => res.render('acerca', { title: 'Acerca de'}))
router.get('/nosotros', (req,res) => res.render('nosotros', { title: 'Nosotros'}))

export default router