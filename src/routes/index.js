import{ Router } from "express"

const router = Router()

router.get('/', (req,res) => res.render('index',{ title: 'Bienvenido Al Drugs Preventions'}))
router.get('/about', (req,res) => res.render('about', { title: 'Informacion'}))
router.get('/contact', (req,res) => res.render('contact', { title: 'Contacto'}))
router.get('/acerca', (req,res) => res.render('acerca', { title: 'Acerca de'}))
router.get('/nosotros', (req,res) => res.render('nosotros', { title: 'Nosotros'}))
router.get('/service', (req,res) => res.render('service', { title: 'Service'}))

export default router