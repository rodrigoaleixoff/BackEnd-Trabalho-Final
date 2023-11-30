const express = require('express')
const sequelize = require('../helpers/banco')
const router = express.Router()

const UsuarioDAO = require('../models/Usuario')
const CardapioDAO = require('../models/Cardapio')
const ProdutoDAO = require('../models/Produto')

router.get('/', async (req,res) => {
    await sequelize.sync({force: true})

    await UsuarioDAO.create("Rodrigo", "1234", true)
    await UsuarioDAO.create("Bruno", "4455", false)
    await UsuarioDAO.create("Ana", "1445", false)
    await UsuarioDAO.create("Jose", "4565", false)
    await UsuarioDAO.create("Carlos", "7474", true)
    await UsuarioDAO.create("Jade", "8852", false)

    await CardapioDAO.create("Rodrigo", "Belo Almoço", "Restaurante para familia")
    await CardapioDAO.create("Rodrigo", "Bom Domingo", "Restaurante familiar")
    await CardapioDAO.create("Bruno", "Linda Flora", "Cafeteria")
    await CardapioDAO.create("Bruno", "Restaurante Dois Irmaos", "Restaurante e Bar")
    await CardapioDAO.create("Ana", "Novo Jardim", "Cafeteria")
    await CardapioDAO.create("Ana", "So Delecia", "Doceria")
    await CardapioDAO.create("Jose", "Geli+ Sorveteria", "Sorveteria")
    await CardapioDAO.create("Jose", "Japa Nobre", "Melhor sushi da cidade")
    await CardapioDAO.create("Carlos", "Clara Manha", "Padaria")
    await CardapioDAO.create("Carlos", "Pizzaria Brabissima", "Pizzaria especializado na qualidade")
    await CardapioDAO.create("Jade", "Podrao da Jade", "Hamburgueria")
    await CardapioDAO.create("Jade", "KingDog", "Especializado em cachorro quente")

    //Belo Almoço
    await ProdutoDAO.create(1, "Risoto de Cogumelos", 35.00, "Risoto cremoso feito com uma variedade de cogumelos frescos e finalizado com queijo parmesao.")
    await ProdutoDAO.create(1, "File Mignon ao Molho de Vinho", 45.00, "File mignon grelhado ao ponto, acompanhado de um delicioso molho de vinho tinto, ervas frescas e batatas rusticas.")
    await ProdutoDAO.create(1, "Salmao Grelhado com Legumes", 38.00, "Salmao fresco grelhado, servido com uma selecao de legumes frescos da estação e regado com molho de manteiga de ervas.")
    await ProdutoDAO.create(1, "Massa Carbonara", 28.00, "Espaguete al dente com molho cremoso de ovo, queijo parmesao, pancetta crocante e pimenta preta moida na hora.")
    await ProdutoDAO.create(1, "Frango a Parmegiana", 32.00, "Peito de frango empanado, coberto com molho de tomate caseiro, queijo derretido e gratinado ao forno, acompanhado de espaguete.")
    await ProdutoDAO.create(1, "Paella Marinera", 40.00, "Prato tradicional espanhol, uma mistura de arroz com frutos do mar, como camaroes, lulas e mexilhoes, cozidos lentamente com acafrao e pimentoes.")
    await ProdutoDAO.create(1, "Bife a Cavalo", 34.00, "Bife suculento servido com um ovo frito por cima, acompanhado de arroz, feijão, batatas fritas e salada verde.")
    await ProdutoDAO.create(1, "Yakissoba Vegetariano", 30.00, "Macarrao japones refogado com legumes frescos, cogumelos e molho oriental levemente adocicado.")
    await ProdutoDAO.create(1, "Hamburguer Artesanal", 25.00, "Hamburguer suculento preparado artesanalmente, com queijo derretido, alface, tomate e molho especial, servido com batatas fritas.")
    await ProdutoDAO.create(1, "Ceviche Peruano", 36.00, "Cubos de peixe fresco marinados em suco de limao, com cebola roxa, milho, pimenta e coentro, servido com batata doce crocante.")

    //Bom domingo
    await ProdutoDAO.create(2, "Pad Thai", 29.00, "Macarrao de arroz frito com camaroes, tofu, broto de feijao, amendoim, ovos e uma mistura de molhos tailandeses, finalizado com limao e coentro fresco.")
    await ProdutoDAO.create(2, "Costelinha de Porco ao Barbecue", 40.00, "Costelinhas de porco tenras e suculentas marinadas em molho barbecue caseiro, assadas lentamente ate ficarem caramelizadas e servidas com batatas rusticas.")
    await ProdutoDAO.create(2, "Moqueca de Peixe", 37.00, "Prato tipico da culinaria brasileira, peixe fresco cozido lentamente com leite de coco, pimentoes, cebola, tomate e coentro, acompanhado de arroz branco.")
    await ProdutoDAO.create(2, "Pizza Margherita", 27.00, "Pizza de massa fina coberta com molho de tomate fresco, mucarela de bufala, tomate cereja, manjericao fresco e um fio de azeite de oliva.")
    await ProdutoDAO.create(2, "Tacos de Carnitas", 32.00, "Tortilhas de milho recheadas com carne de porco desfiada e temperada, servidas com cebola, coentro, abacate e molho picante.")
    await ProdutoDAO.create(2, "Tempura de Legumes e Camarao", 36.00, "Selecao de legumes frescos e camaroes empanados em massa leve, fritos ate ficarem crocantes, acompanhados de molho de mergulho tempura.")
    await ProdutoDAO.create(2, "Sopa de Tomate com Manjericao", 20.00, "Sopa cremosa de tomate fresco, temperada com manjericao fresco e servida com croutons crocantes e um fio de azeite de oliva.")

    //Linda Flora
    await ProdutoDAO.create(3, "Cappuccino Italiano", 7.00, "Cafe espresso misturado com leite vaporizado e uma generosa camada de espuma de leite, polvilhado com cacau em po.")
    await ProdutoDAO.create(3, "Croissant de Chocolate", 5.50, "Croissant fresco e crocante recheado com pedaços generosos de chocolate meio amargo derretido.")
    await ProdutoDAO.create(3, "Muffin de Blueberry", 6.00, "Muffin macio e umido, repleto de blueberries frescas e uma leve cobertura acucarada.")
    await ProdutoDAO.create(3, "Cha de Camomila", 4.50, "Infusao de flores de camomila em agua quente, conhecida por suas propriedades calmantes e aroma suave.")
    await ProdutoDAO.create(3, "Bagel de Queijo Creme", 6.5, "Bagel levemente tostado e recheado com generosas porcoes de queijo creme, perfeito para um lanche rapido.")
    await ProdutoDAO.create(3, "Cafe Gelado com Baunilha", 8.00, "Cafe gelado suave e refrescante, com um toque de extrato de baunilha e servido com gelo.")

    //Restaurante Dois Irmaos
    await ProdutoDAO.create(4, "Picanha Argentina", 40.00, "Picanha suculenta grelhada ao ponto, temperada com chimichurri argentino, acompanhada de batatas rusticas e salada verde.")
    await ProdutoDAO.create(4, "Mojito Cubano", 20.00, "Coquetel refrescante feito com rum branco, hortela fresca, suco de limao, acucar e agua com gas, servido com gelo picado.")
    await ProdutoDAO.create(4, "Prato feito", 15.00, "Prato com arroz, feijao, carne e batata frita.")
    await ProdutoDAO.create(4, "Cerveja Heineken", 12.00, "Long neck Heineken")

    //Novo Jardim
    await ProdutoDAO.create(5, "Espresso", 3.50, "Uma dose única de café expresso, encorpado e aromático, servido em uma xícara pequena.")
    await ProdutoDAO.create(5, "Chocolate Quente Belga", 6.00, "Uma bebida cremosa e reconfortante, feita com chocolate belga derretido, leite vaporizado e uma pitada de canela.")
    await ProdutoDAO.create(5, "Bagel de Salmão Defumado", 8.00, "Bagel fresco recheado com cream cheese, fatias suculentas de salmão defumado, cebola roxa e alcaparras.")
    await ProdutoDAO.create(5, "Bolo de Cenoura com Cobertura de Chocolate", 5.50, "Fatia generosa de bolo de cenoura macio e úmido, coberto com uma camada deliciosa de ganache de chocolate.")

    //So Delecia
    await ProdutoDAO.create(6, "Cupcake Red Velvet", 5.00, "Cupcake vermelho aveludado com uma textura macia e suave, coberto com cream cheese frosting e raspas de chocolate branco.")
    await ProdutoDAO.create(6, "Torta de Limão Merengada", 7.00, "Torta de limão refrescante e azedinha, coberta com merengue dourado e delicadamente tostado.")
    await ProdutoDAO.create(6, "Trufas de Chocolate Amargo", 3.50, "Trufas artesanais de chocolate amargo, com um centro macio e cremoso, cobertas com cacau em pó.")
    await ProdutoDAO.create(6, "Macaron de Framboesa", 2.50, "Macaron delicado com duas conchas crocantes de amêndoa, recheado com creme de framboesa suave.")
    await ProdutoDAO.create(6, "Cheesecake de Morango", 8.00, "Cheesecake cremoso com base crocante de biscoito, coberto com um generoso purê de morango fresco.")
    await ProdutoDAO.create(6, "Brownie de Nozes", 6.0, "Brownie denso e rico, repleto de nozes crocantes, perfeito para os amantes de chocolate e nozes.")

    //Geli+ Sorveteria
    await ProdutoDAO.create(7, "Chocolate Belga", 8.00, "Um sorvete cremoso e indulgente, feito com chocolate belga de alta qualidade, proporcionando um sabor rico e intenso de cacau.")
    await ProdutoDAO.create(7, "Morango Fresco", 7.50, "Sorvete suave e refrescante com pedaços suculentos de morangos frescos, garantindo um sabor frutado e natural.")
    await ProdutoDAO.create(7, "Baunilha Bourbon", 6.50, "Sorvete com aroma delicado de baunilha Bourbon, proveniente de favas de baunilha, proporcionando um sabor suave e levemente adocicado.")
    await ProdutoDAO.create(7, "Caramelo Salgado", 8.50, "Uma combinação equilibrada de doçura caramelizada e um toque sutil de sal, oferecendo uma experiência deliciosamente contrastante.")
    await ProdutoDAO.create(7, "Pistache Crocante", 7.00, "Sorvete cremoso de pistache com pedaços crocantes de pistache torrado, proporcionando uma textura e um sabor irresistíveis.")
    await ProdutoDAO.create(7, "Doce de Leite Argentino", 7.50, "Um sorvete delicadamente doce feito com autêntico doce de leite argentino, oferecendo um sabor rico e suave de caramelo.")

    //Japa Nobre
    await ProdutoDAO.create(8, "Sushi Sashimi Combo", 60.00, "Uma seleção variada de sushis e sashimis frescos, incluindo atum, salmão, camarão e polvo, servidos com wasabi e gengibre em conserva.")
    await ProdutoDAO.create(8, "Tempurá Misto", 45.00, "Legumes frescos e frutos do mar levemente empanados e fritos em uma massa leve e crocante, acompanhados de molho de mergulho tempurá.")
    await ProdutoDAO.create(8, "Yakissoba de Frango", 40.00, "Macarrão japonês refogado com legumes frescos, frango macio e fatias de cogumelos, cozidos em um molho oriental saboroso.")
    await ProdutoDAO.create(8, "Chirashi Bowl", 55.00, "Uma tigela de arroz de sushi coberta com uma variedade de peixes fatiados, ovas de peixe, pepino e omelete, acompanhada de molho de soja.")
    await ProdutoDAO.create(8, "Ramen Tonkotsu", 50.00, "Tigela de macarrão ramen em caldo de porco cremoso, coberto com fatias de barriga de porco cozida lentamente, ovo marinado, cebolinha e alga nori.")
    await ProdutoDAO.create(8, "Gyoza", 35.00, "Pastéis japoneses cozidos no vapor e depois dourados na frigideira, recheados com carne de porco, legumes e temperos, servidos com molho de soja.")
    await ProdutoDAO.create(8, "Unagi Don", 58.00, "Tigela de arroz de sushi coberta com fatias de enguia grelhada com molho teriyaki doce e salgado, regada com sementes de gergelim e cebolinha fresca.")

    //Clara Manha
    await ProdutoDAO.create(9, "Pão Francês", 0.60, "Pão de massa macia e crosta crocante, perfeito para sanduíches ou para acompanhar refeições.")
    await ProdutoDAO.create(9, "Croissant de Amêndoa", 6.50, "Croissant delicadamente folhado, recheado com creme de amêndoas e polvilhado com amêndoas torradas.")
    await ProdutoDAO.create(9, "Bolo de Cenoura", 4.50, "Bolo macio de cenoura coberto com uma generosa camada de cobertura de chocolate.")
    await ProdutoDAO.create(9, "Pão de Queijo", 3.50, "Petiscos tradicionais feitos com massa de queijo e polvilhados com queijo parmesão, crocantes por fora e macios por dentro.")
    await ProdutoDAO.create(9, "Torta de Maçã", 9.00, "Fatias de maçã frescas cozidas em um recheio doce e canela, envoltas em uma crosta de massa folhada.")
    await ProdutoDAO.create(9, "Pão Integral de Sementes", 5.00, "Pão saudável feito com farinha integral e uma mistura de sementes, oferecendo um sabor rico e textura nutritiva.")

    //Pizzaria Brabissima
    await ProdutoDAO.create(10, "Margarita", 35.00, "Pizza clássica com molho de tomate, queijo mussarela fresco, tomate em rodelas e manjericão fresco.")
    await ProdutoDAO.create(10, "Pepperoni", 40.00, "Pizza coberta com generosas fatias de pepperoni picante e queijo mussarela derretido.")
    await ProdutoDAO.create(10, "Quatro Queijos", 38.00, "Pizza com uma mistura de quatro queijos: mussarela, gorgonzola, parmesão e provolone.")
    await ProdutoDAO.create(10, "Calabresa", 37.00, "Pizza com fatias finas de linguiça calabresa, cebola, molho de tomate e queijo derretido.")
    await ProdutoDAO.create(10, "Frango com Catupiry", 42.00, "Pizza com frango desfiado, catupiry cremoso, molho de tomate e azeitonas pretas.")
    await ProdutoDAO.create(10, "Vegetariana", 39.00, "Pizza com uma variedade de legumes frescos, como pimentões, cebolas, cogumelos, tomates e azeitonas.")

    //Podrao da Jade
    await ProdutoDAO.create(11, "Hamburguer Completo", 12.00, "Hamburguer, pao, bife, ovo, salada e bata palha.")
    await ProdutoDAO.create(11, "Cachorro quente", 5.00, "Pao, salsicha, molho e batata palha.")
    await ProdutoDAO.create(11, "Coca Cola", 4.00, "Refrigerante")

    //KingDog
    await ProdutoDAO.create(12, "KingDog", 7.50, "Cachorro quente com pao, salsicha, molho, batata palha, passas, ervilha, milho e pure de batata.")
    await ProdutoDAO.create(12, "Coco Cola", 4.00, "Refrigerante")

    res.json({msg: 'Banco criado com sucesso'})
})

module.exports = router