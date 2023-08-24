import{ Router } from "express"

const router = Router()


router.get('/', (req,res) => res.render('index',{ title: 'Bienvenido Al Drugs Preventions'}))
router.get('/about', (req,res) => res.render('about', { title: 'Information'}))
router.get('/contact', (req,res) => res.render('contact', { title: 'Contact'}))
router.get('/service', (req,res) => res.render('service', { title: 'Service'}))


export default router