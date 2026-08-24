/**
 * Bar do Giba - Official Website Data & Multilingual Content
 * Moema, São Paulo - SP
 */

const RESTAURANT_INFO = {
  name: "Bar do Giba",
  subtitle: "Tradição, Boteco Raiz & O Melhor Pastel de Moema",
  address: "Av. Moaci, 574 - Moema, São Paulo - SP, CEP 04083-001",
  phone: "(11) 5535-9220",
  whatsapp: "+551155359220",
  instagram: "oficialbardogiba",
  instagramUrl: "https://www.instagram.com/oficialbardogiba/",
  googleMapsUrl: "https://maps.google.com/?q=Av.+Moaci,+574+-+Moema,+S%C3%A3o+Paulo+-+SP",
  hours: {
    tuesdayToFriday: "17:00 - 00:30",
    saturday: "12:00 - 00:30 (Feijoada Tradicional)",
    sunday: "12:00 - 18:00",
    monday: "Fechado / Closed / مغلق"
  },
  scheduleDays: {
    0: { open: 12, close: 18, name: "Domingo" },
    1: { closed: true, name: "Segunda-feira" },
    2: { open: 17, close: 24.5, name: "Terça-feira" },
    3: { open: 17, close: 24.5, name: "Quarta-feira" },
    4: { open: 17, close: 24.5, name: "Quinta-feira" },
    5: { open: 17, close: 24.5, name: "Sexta-feira" },
    6: { open: 12, close: 24.5, name: "Sábado" }
  }
};

const MENU_ITEMS = [
  // --- PASTÉIS ARTESANAIS (O CARRO-CHEFE) ---
  {
    id: "pastel-engibaiado",
    category: "pasteis",
    featured: true,
    badge: "Campeão Veja SP",
    price: 46.00,
    image: "assets/images/pasteis.jpg",
    translations: {
      pt: {
        name: "Engibaiado de Pastéis (12 un.)",
        desc: "A porção lendária do Giba: 12 mini pastéis crocantes com massa artesanal sequinha. Sabores clássicos e camarão cremoso."
      },
      en: {
        name: "Giba's Artisan Pastéis Platter (12 pcs)",
        desc: "The legendary Giba sampler: 12 crispy handmade Brazilian pastéis with golden bubbly crust and rich fillings including creamy shrimp."
      },
      ar: {
        name: "طبق باستيل جيبا الحرفي (12 قطعة)",
        desc: "فطائر الباستيل البرازيلية المقرمشة والذهبية المشهورة في مويما، بحشوات الروبيان الكريمي واللحم المتبل والجبن الفاخر."
      }
    }
  },
  {
    id: "pastel-camarao",
    category: "pasteis",
    featured: true,
    badge: "Especialidade da Casa",
    price: 18.50,
    image: "assets/images/pasteis.jpg",
    translations: {
      pt: {
        name: "Pastel Especial de Camarão com Catupiry",
        desc: "Pastel individual generoso, recheado com camarões selecionados e o legítimo requeijão Catupiry cremoso."
      },
      en: {
        name: "Jumbo Shrimp & Catupiry Cheese Pastel",
        desc: "Generous crispy pastel filled with fresh sautéed jumbo shrimp and authentic creamy Brazilian Catupiry cheese."
      },
      ar: {
        name: "باستيل الروبيان مع جبن كاتوبيري الكريمي",
        desc: "فطيرة باستيل كبيرة مقرمشة محشوة بالروبيان الطازج المتبل مع جبن الكاتوبيري البرازيلي الأصلي."
      }
    }
  },
  {
    id: "pastel-carne-seca",
    category: "pasteis",
    price: 16.00,
    image: "assets/images/pasteis.jpg",
    translations: {
      pt: {
        name: "Pastel de Carne Seca com Queijo Coalho",
        desc: "Carne seca desfiada temperada com ervas finas e queijo de coalho dourado na chapa."
      },
      en: {
        name: "Sun-Dried Beef & Coalho Cheese Pastel",
        desc: "Shredded sun-dried beef seasoned with fine herbs and grilled golden Brazilian coalho cheese."
      },
      ar: {
        name: "باستيل اللحم المجفف المتبل مع جبن كوالهو",
        desc: "لحم بقري مجفف ومتبل بالأعشاب مع قطع جبن كوالهو المشوي في عجينة ذهبية مقرمشة."
      }
    }
  },
  {
    id: "pastel-palmito-queijo",
    category: "pasteis",
    price: 15.00,
    image: "assets/images/pasteis.jpg",
    translations: {
      pt: {
        name: "Pastel de Palmito Especial",
        desc: "Palmito pupunha fresco refogado no azeite e ervas, cremoso e irresistível."
      },
      en: {
        name: "Heart of Palm Pastel (Vegetarian)",
        desc: "Fresh heart of palm simmered in extra virgin olive oil, herbs, and savory seasoning."
      },
      ar: {
        name: "باستيل قلوب النخيل (نباتي)",
        desc: "قلوب النخيل الطازجة والمطبوخة بزيت الزيتون البكر والأعشاب العطرية، خيار نباتي رائع."
      }
    }
  },

  // --- PETISCOS & BOTECO RAIZ ---
  {
    id: "carne-seca-mandioca",
    category: "petiscos",
    featured: true,
    badge: "Mais Pedido",
    price: 68.00,
    image: "assets/images/petiscos.jpg",
    translations: {
      pt: {
        name: "Carne Seca Acebolada com Mandioca Frita",
        desc: "Carne seca desfiada puxada na manteiga de garrafa e cebola roxa, acompanhada de mandioca macia por dentro e crocante por fora."
      },
      en: {
        name: "Sautéed Sun-Dried Beef with Golden Yucca",
        desc: "Tender shredded beef sautéed in artisanal bottled butter with red onions, served with crispy golden yucca cassava fries."
      },
      ar: {
        name: "لحم بقري مجفف ومحمص مع الكسافا المقلية",
        desc: "لحم بقري مجفف ومتبل محمر في زبدة الزجاجة التقليدية مع البصل، يقدم مع الكسافا المقرمشة من الخارج والطرية من الداخل."
      }
    }
  },
  {
    id: "torresmo-crocante",
    category: "petiscos",
    featured: true,
    badge: "Crocância Perfeita",
    price: 44.00,
    image: "assets/images/petiscos.jpg",
    translations: {
      pt: {
        name: "Torresmo de Rolo Estaladiço",
        desc: "Torresmo pururucado e estaladiço, dourado no ponto exato, servido com gomos de limão cravo fresco."
      },
      en: {
        name: "Crispy Crackling Pork Belly (Torresmo)",
        desc: "Ultra-crispy golden pork belly cracklings, seasoned to perfection and served with fresh Brazilian Rangpur lime wedges."
      },
      ar: {
        name: "توريزمو مقرمش (Torresmo)",
        desc: "قطع مقرمشة ذهبية متبلة على الطريقة البرازيلية الشعبية تقدم مع شرائح الليمون الأخضر المنعش."
      }
    }
  },
  {
    id: "caldinho-feijao",
    category: "petiscos",
    price: 19.00,
    image: "assets/images/feijoada.jpg",
    translations: {
      pt: {
        name: "Caldinho de Feijão Amigo do Giba",
        desc: "Caldo de feijão preto aveludado e temperado na medida certa, finalizado com torresminho crocante, bacon e cheiro verde."
      },
      en: {
        name: "Giba's Black Bean Soup Shot (Caldinho)",
        desc: "Rich velvety black bean broth spiced with garlic and herbs, topped with crispy bacon bits, cracklings, and fresh parsley."
      },
      ar: {
        name: "شوربة الفاصوليا السوداء البرازيلية (كالدينيو)",
        desc: "حساء الفاصوليا السوداء المخملي المتبل بالثوم والأعشاب والبهارات البرازيلية الغنية مع قطع مقرمشة وبقدونس."
      }
    }
  },
  {
    id: "bolinho-bacalhau",
    category: "petiscos",
    price: 52.00,
    image: "assets/images/petiscos.jpg",
    translations: {
      pt: {
        name: "Bolinhos de Bacalhau Tradicionais (8 un.)",
        desc: "Receita artesanal com legítimo bacalhau da Noruega desfiado e batatas selecionadas, fritos na hora."
      },
      en: {
        name: "Authentic Codfish Croquettes (8 pcs)",
        desc: "Traditional Portuguese-Brazilian cod croquettes made with authentic Norwegian bacalhau, fluffy potatoes, and fresh herbs."
      },
      ar: {
        name: "كروكيت سمك الباكالاو التقليدي (8 قطع)",
        desc: "أقراص مقرمشة من سمك القد النرويجي الفاخر مع البطاطس المهروسة والأعشاب وزيت الزيتون البكر."
      }
    }
  },

  // --- PRATOS & FEIJOADA ---
  {
    id: "feijoada-completa",
    category: "pratos",
    featured: true,
    badge: "Tradição de Sábado",
    price: 135.00,
    image: "assets/images/feijoada.jpg",
    translations: {
      pt: {
        name: "Feijoada Completa do Giba (Serve 2 a 3 pessoas)",
        desc: "Servida aos sábados na cumbuca de barro: feijão preto com carnes nobres selecionadas (costelinha, lombo, paio e carne seca). Acompanha arroz soltinho, couve refogada, farofa da casa, torresmo e laranjas frescas."
      },
      en: {
        name: "Giba's Signature Feijoada Completa (Serves 2-3)",
        desc: "Traditional Saturday specialty served in clay pots: rich black bean stew with prime ribs, smoked sausage, and dried beef. Accompanied by white rice, garlic collard greens, toasted farofa, crispy pork belly, and fresh oranges."
      },
      ar: {
        name: "فيجوادا جيبا التقليدية الكاملة (تكفي 2 إلى 3 أشخاص)",
        desc: "طبق البرازيل الوطني الشهير يُقدم في أوانٍ فخارية: يخنة الفاصوليا السوداء مع اللحوم الفاخرة، تقدم مع الأرز الأبيض والملفوف المحمص ودقيق المنيهوت المتبل وشرائح البرتقال."
      }
    }
  },
  {
    id: "file-parmegiana-giba",
    category: "pratos",
    price: 98.00,
    image: "assets/images/petiscos.jpg",
    translations: {
      pt: {
        name: "Filé à Parmegiana da Casa",
        desc: "Filé mignon empanado e crocante, coberto com molho artesanal de tomates frescos e gratinado com queijo muçarela. Acompanha arroz e fritas crocantes."
      },
      en: {
        name: "House Filet Mignon Parmigiana",
        desc: "Crispy breaded tenderloin steak smothered in house-made fresh tomato sauce and bubbly melted mozzarella. Served with rice and fries."
      },
      ar: {
        name: "ستيك بارميجيانا فيليه مينيون",
        desc: "فيليه لحم بقري طري مغطى بصلصة الطماطم الإيطالية الطازجة والجبن الذائب المحمر، يقدم مع الأرز والبطاطس المقلية."
      }
    }
  },
  {
    id: "picanha-chapa",
    category: "pratos",
    price: 118.00,
    image: "assets/images/petiscos.jpg",
    translations: {
      pt: {
        name: "Picanha Nobre Fatiada na Chapa",
        desc: "Picanha grelhada servida fumegante na chapa de ferro com alho laminado dourado, farofa crocante, vinagrete fresco e pão de alho."
      },
      en: {
        name: "Sizzling Picanha Steak on Cast Iron",
        desc: "Prime Brazilian Picanha steak sliced and served sizzling on iron skillet with golden garlic chips, Brazilian vinaigrette, farofa, and garlic bread."
      },
      ar: {
        name: "ستيك بيكانيا الفاخر على الصاج الساخن",
        desc: "شرائح لحم البيكانيا البرازيلي الفاخر المشوي على صاج الحديد مع رقائق الثوم المقرمشة وصلصة الخضار والخبز المحمص."
      }
    }
  },

  // --- CAIPIRINHAS & BEBIDAS ---
  {
    id: "caipirinha-tangerina-pimenta",
    category: "bebidas",
    featured: true,
    badge: "Criação Autoral",
    price: 32.00,
    image: "assets/images/caipirinhas.jpg",
    translations: {
      pt: {
        name: "Caipirinha de Tangerina com Pimenta Dedo-de-Moça",
        desc: "A consagrada receita do Giba: mexerica/tangerina fresca macerada, cachaça artesanal de alambique e um toque picante elegante de pimenta dedo-de-moça."
      },
      en: {
        name: "Tangerine & Red Chili Artisan Caipirinha",
        desc: "Giba's signature award-winning cocktail: freshly muddled tangerines, artisanal aged Brazilian cachaça, and a subtle kick of dedo-de-moça chili pepper."
      },
      ar: {
        name: "كايبيرينيا اليوسفي مع الفلفل الأحمر (مشروب مميز)",
        desc: "المشروب البرازيلي الشهير مع اليوسفي الطازج المهروس وعصير الفاكهة الطبيعي ولمسة خفيفة ساحرة من الفلفل الحار."
      }
    }
  },
  {
    id: "caipirinha-classica-limao",
    category: "bebidas",
    featured: true,
    badge: "Clássica",
    price: 28.00,
    image: "assets/images/caipirinhas.jpg",
    translations: {
      pt: {
        name: "Caipirinha Tradicional de Limão Tahiti & Cravo",
        desc: "Limão Tahiti e limão cravo macerados com açúcar orgânico e cachaça premium ou vodka."
      },
      en: {
        name: "Traditional Lime Caipirinha",
        desc: "Fresh Brazilian Tahiti & Rangpur limes muddled with cane sugar and premium cachaça or vodka over crushed ice."
      },
      ar: {
        name: "كايبيرينيا الليمون البرازيلي الكلاسيكية",
        desc: "الليمون البرازيلي المنعش المهروس مع قصب السكر ومشروب الكايبيرينيا البارد فوق الثلج المجروش."
      }
    }
  },
  {
    id: "caipirinha-maracuja-caju",
    category: "bebidas",
    price: 34.00,
    image: "assets/images/caipirinhas.jpg",
    translations: {
      pt: {
        name: "Caipirinha de Maracujá & Caju Fresco",
        desc: "Polpa de maracujá doce combinada com fatias de caju fresco e hortelã aromática."
      },
      en: {
        name: "Passion Fruit & Fresh Cashew Caipirinha",
        desc: "Tangy sweet passion fruit pulp blended with fresh tropical cashew fruit and aromatic mint leaves."
      },
      ar: {
        name: "كايبيرينيا الباشن فروت وفاكهة الكاجو الاستوائية",
        desc: "مزيج فاخر من فاكهة الباشن فروت مع الكاجو الاستوائي الطازج وأوراق النعناع العطري."
      }
    }
  },
  {
    id: "chopp-estupidamente-gelado",
    category: "bebidas",
    price: 14.00,
    image: "assets/images/hero.jpg",
    translations: {
      pt: {
        name: "Chopp Brahma Claro & Escuro (Caldereta)",
        desc: "Tirado na pressão perfeita com colarinho cremoso de 2 dedos, servido em copo ultragelado."
      },
      en: {
        name: "Draft Beer (Ice-Cold Chope)",
        desc: "Poured under perfect draft pressure with a velvety 2-finger foam collar in a frosted glass."
      },
      ar: {
        name: "مشروب الشعير والمثلجات المنعشة",
        desc: "يُسكب طازجاً في أكواب مثلجة مع رغوة كريمية منعشة وأجواء البوتيكو الحيوية."
      }
    }
  },

  // --- SOBREMESAS ---
  {
    id: "pudim-leite-condensado",
    category: "sobremesas",
    price: 18.00,
    image: "assets/images/feijoada.jpg",
    translations: {
      pt: {
        name: "Pudim de Leite Condensado com Calda de Caramelo",
        desc: "Pudim liso e aveludado sem furinhos, banhado em calda dourada de caramelo artesanal."
      },
      en: {
        name: "Brazilian Caramel Flan (Pudim de Leite)",
        desc: "Silky smooth condensed milk custard flan drenched in rich golden artisanal caramel syrup."
      },
      ar: {
        name: "بودينغ الكراميل البرازيلي الفاخر (Pudim)",
        desc: "حلوى البودينغ البرازيلية الحريرية بالحليب المكثف مغطاة بصلصة الكراميل الذهبية اللذيذة."
      }
    }
  },
  {
    id: "pastel-doce-nutella-banana",
    category: "sobremesas",
    price: 19.50,
    image: "assets/images/pasteis.jpg",
    translations: {
      pt: {
        name: "Pastel Doce de Nutella com Banana e Canela",
        desc: "Massa sequinha de pastel recheada com bastante Nutella e fatias de banana, polvilhada com açúcar e canela."
      },
      en: {
        name: "Sweet Nutella & Banana Pastel",
        desc: "Crispy sweet pastry stuffed with warm melted Nutella hazelnut cream and banana, dusted with cinnamon sugar."
      },
      ar: {
        name: "باستيل النوتيلا والموز مع القرفة",
        desc: "فطيرة باستيل مقرمشة محشوة بشوكولاتة النوتيلا الساخنة وشرائح الموز مع رشة سكر وقرفة."
      }
    }
  }
];

const REVIEWS = [
  {
    author: "Veja Comer & Beber SP",
    role: "Guia Gastronômico Oficial",
    avatar: "🏆",
    stars: 5,
    quote: {
      pt: "O Bar do Giba é uma das maiores instituições botequreiras de São Paulo. O pastel de camarão e a caipirinha de tangerina com pimenta são patrimônios da cidade.",
      en: "Bar do Giba is one of São Paulo's greatest culinary landmarks. The shrimp pastéis and tangerine-chili caipirinha are true city treasures.",
      ar: "بار دو جيبا هو أحد أعظم المعالم التراثية في ساو باولو. فطائر الباستيل بالروبيان وكوكتيل اليوسفي بالفلفل من كنوز المدينة التي لا تُفوّت."
    }
  },
  {
    author: "Rodrigo Mendonça",
    role: "Morador de Moema e Cliente há 15 anos",
    avatar: "👨‍💼",
    stars: 5,
    quote: {
      pt: "Não existe pastel melhor em toda a Zona Sul. A atmosfera é maravilhosa, o atendimento do Giba e dos garçons faz a gente se sentir em casa.",
      en: "There's no better pastel in the entire South Zone of São Paulo. The vibe is lively, and the staff treats everyone like old friends.",
      ar: "لا يوجد باستيل أفضل منه في جنوب ساو باولو بأكملها. الأجواء رائعة والخدمة تجعلك تشعر وكأنك في بيتك."
    }
  },
  {
    author: "Camila Silveira & Lucas",
    role: "Foodies & Críticos de Botequim",
    avatar: "🌟",
    stars: 5,
    quote: {
      pt: "A feijoada de sábado é imperdível, e os petiscos na lousa são uma experiência única. Um boteco de verdade que nunca perdeu sua alma.",
      en: "The Saturday Feijoada is unmissable, and the chalkboard menu brings such authentic charm. A true Brazilian boteco with an unbeatable soul.",
      ar: "وجبة الفيجوادا يوم السبت استثنائية، وقائمة الأطباق المكتوبة على السبورات تمنح تجربة أصيلة لا تضاهى."
    }
  }
];

const TRANSLATIONS = {
  pt: {
    meta_title: "Bar do Giba | O Lendário Boteco de Moema - São Paulo",
    meta_desc: "Conheça o Bar do Giba em Moema, São Paulo. Famoso pelos melhores pastéis artesanais, petiscos de boteco premiados, feijoada e caipirinhas autorais.",
    nav_home: "Início",
    nav_story: "Tradição",
    nav_menu: "Cardápio na Lousa",
    nav_reserve: "Reservas",
    nav_gallery: "Experiência",
    nav_reviews: "Avaliações",
    nav_contact: "Onde Estamos",
    btn_order_now: "Pedir pelo WhatsApp",
    btn_reserve_table: "Reservar Mesa",
    btn_view_menu: "Ver Cardápio Digital",
    badge_open: "Aberto Agora",
    badge_closed: "Fechado no Momento",
    hero_tag: "TRADIÇÃO BOÊMIA EM MOEMA",
    hero_title: "Onde o Pastel é Arte & a Amizade é Tradição",
    hero_subtitle: "Sem cardápio de papel, mas com o coração na lousa. O clássico boteco paulistano premiado pela Veja SP que conquistou gerações de apreciadores do bom sabor.",
    stats_years: "Anos de Tradição",
    stats_pasteis: "Milhares de Pastéis Servidos",
    stats_awards: "Prêmios Veja SP",
    stats_rating: "Estrelas no Google",
    story_badge: "NOSSA HISTÓRIA",
    story_title: "A Alma do Boteco Paulista em Moema",
    story_p1: "No coração da Avenida Moaci, o **Bar do Giba** nasceu do amor pela boa mesa, pela cerveja gelada e pela acolhida calorosa. Aqui, a tradição dispensa afetações: as novidades do dia brilham nas lendárias **lousas de giz** espalhadas pelas paredes de tijolinho.",
    story_p2: "Eleito repetidas vezes como um dos melhores botecos de São Paulo, o Giba é o ponto de encontro perfeito para amigos, famílias e amantes da boa gastronomia brasileira que buscam sabor genuíno e momentos inesquecíveis.",
    story_feature1_title: "Massa Artesanal Sequinha",
    story_feature1_desc: "Pastéis fritos no ponto perfeito com recheios generosos e crocância inigualável.",
    story_feature2_title: "Petiscos Premiados",
    story_feature2_desc: "Receitas de família consagradas pelos maiores guias gastronômicos da cidade.",
    story_feature3_title: "Caipirinhas de Autor",
    story_feature3_desc: "Frutas frescas combinadas com cachaças selecionadas e toques especiais.",
    menu_badge: "A LOUSA DO GIBA",
    menu_title: "Cardápio Interativo & Especialidades",
    menu_subtitle: "Escolha seus favoritos da nossa lousa digital e envie seu pedido diretamente para o balcão via WhatsApp!",
    menu_tab_all: "Todos os Pratos",
    menu_tab_pasteis: "🥟 Pastéis Artesanais",
    menu_tab_petiscos: "🥩 Petiscos de Balcão",
    menu_tab_pratos: "🍲 Pratos & Feijoada",
    menu_tab_bebidas: "🍹 Caipirinhas & Chopp",
    menu_tab_sobremesas: "🍮 Sobremesas",
    menu_search_placeholder: "Buscar por prato, ingrediente (ex: camarão, carne seca)...",
    btn_add_to_cart: "Adicionar",
    cart_title: "Seu Pedido no Giba",
    cart_empty: "Sua comanda está vazia. Escolha os quitutes da lousa!",
    cart_total: "Total Estimado:",
    cart_btn_whatsapp: "Enviar Pedido via WhatsApp",
    cart_note: "* O pedido será enviado diretamente ao WhatsApp do Bar do Giba para confirmação.",
    reserve_badge: "VIVA A EXPERIÊNCIA",
    reserve_title: "Reserve Sua Mesa no Giba",
    reserve_subtitle: "Garante seu cantinho especial para aniversários, encontros de amigos ou confraternizações.",
    form_name: "Seu Nome Completo",
    form_phone: "WhatsApp para Confirmação",
    form_date: "Data Desejada",
    form_time: "Horário",
    form_guests: "Número de Pessoas",
    form_notes: "Observações ou Ocasião Especial (Opcional)",
    form_btn_submit: "Confirmar Reserva no WhatsApp",
    gallery_badge: "ATMOSFERA",
    gallery_title: "Momentos & Sabores Inesquecíveis",
    reviews_badge: "RECONHECIMENTO",
    reviews_title: "O Que Dizem Nossos Clientes & Críticos",
    contact_badge: "VENHA NOS VISITAR",
    contact_title: "Endereço, Horários & Contato",
    contact_address_label: "Endereço em Moema",
    contact_hours_label: "Horário de Funcionamento",
    contact_phone_label: "Telefone & Reservas",
    contact_social_label: "Siga no Instagram",
    footer_rights: "Bar do Giba - Moema, São Paulo. Todos os direitos reservados.",
    footer_designed: "Site desenvolvido para valorizar a tradição gastronômica paulistana."
  },
  en: {
    meta_title: "Bar do Giba | Legendary Boteco & Best Pastéis in Moema - São Paulo",
    meta_desc: "Discover Bar do Giba in Moema, São Paulo. Renowned for crispy artisan pastéis, award-winning Brazilian boteco appetizers, Feijoada, and craft caipirinhas.",
    nav_home: "Home",
    nav_story: "Tradition",
    nav_menu: "Chalkboard Menu",
    nav_reserve: "Reservations",
    nav_gallery: "Experience",
    nav_reviews: "Reviews",
    nav_contact: "Location",
    btn_order_now: "Order via WhatsApp",
    btn_reserve_table: "Reserve a Table",
    btn_view_menu: "Explore Digital Menu",
    badge_open: "Open Now",
    badge_closed: "Currently Closed",
    hero_tag: "ICONIC BOHEMIAN BOTECO IN MOEMA",
    hero_title: "Where Pastéis Are Art & Friendship is Tradition",
    hero_subtitle: "No paper menus here—just our legendary chalkboards on the wall. The authentic São Paulo boteco awarded by Veja SP that won the hearts of food lovers.",
    stats_years: "Years of Heritage",
    stats_pasteis: "Thousands of Pastéis Fried",
    stats_awards: "Veja SP Awards",
    stats_rating: "Google Rating",
    story_badge: "OUR HERITAGE",
    story_title: "The True Soul of São Paulo's Boteco Culture",
    story_p1: "Nestled in the upscale Moema neighborhood on Avenida Moaci, **Bar do Giba** was born from a passion for delicious comfort food, ice-cold draft beer, and genuine hospitality. Here, daily specials are handwritten on vintage **chalkboards** across exposed brick walls.",
    story_p2: "Repeatedly celebrated as one of the best botecos in Brazil, Giba is the ultimate gathering spot for friends, families, and travelers seeking authentic Brazilian food culture.",
    story_feature1_title: "Artisan Crispy Pastéis",
    story_feature1_desc: "Fried fresh to order with golden bubbly crust and rich, mouthwatering fillings.",
    story_feature2_title: "Award-Winning Appetizers",
    story_feature2_desc: "Time-tested recipes honored by the city's most prestigious culinary guides.",
    story_feature3_title: "Craft Caipirinhas",
    story_feature3_desc: "Exotic tropical fruits muddled with top-shelf Brazilian cachaça and unique touches.",
    menu_badge: "GIBA's CHALKBOARD",
    menu_title: "Interactive Digital Menu & House Specials",
    menu_subtitle: "Select your favorites from our digital blackboard and place your order directly via WhatsApp!",
    menu_tab_all: "All Items",
    menu_tab_pasteis: "🥟 Artisan Pastéis",
    menu_tab_petiscos: "🥩 Boteco Snacks",
    menu_tab_pratos: "🍲 Entrees & Feijoada",
    menu_tab_bebidas: "🍹 Caipirinhas & Beers",
    menu_tab_sobremesas: "🍮 Desserts",
    menu_search_placeholder: "Search dishes or ingredients (e.g., shrimp, beef, caipirinha)...",
    btn_add_to_cart: "Add to Order",
    cart_title: "Your Order Tab",
    cart_empty: "Your tab is empty. Pick delicious dishes from the blackboard!",
    cart_total: "Estimated Total:",
    cart_btn_whatsapp: "Send Order via WhatsApp",
    cart_note: "* Order details will be sent directly to Bar do Giba's WhatsApp for instant confirmation.",
    reserve_badge: "EXPERIENCE GIBA",
    reserve_title: "Book Your Table at Giba",
    reserve_subtitle: "Secure your spot for birthdays, get-togethers, and memorable evenings.",
    form_name: "Full Name",
    form_phone: "WhatsApp Number",
    form_date: "Preferred Date",
    form_time: "Time",
    form_guests: "Party Size",
    form_notes: "Special Occasion or Notes (Optional)",
    form_btn_submit: "Send Reservation Request via WhatsApp",
    gallery_badge: "ATMOSPHERE",
    gallery_title: "Memorable Sights & Authentic Flavors",
    reviews_badge: "REVIEWS & CRITIQUE",
    reviews_title: "What Food Critics & Locals Say",
    contact_badge: "VISIT US",
    contact_title: "Address, Hours & Getting Here",
    contact_address_label: "Address in Moema",
    contact_hours_label: "Opening Hours",
    contact_phone_label: "Phone & Inquiries",
    contact_social_label: "Follow on Instagram",
    footer_rights: "Bar do Giba - Moema, São Paulo. All rights reserved.",
    footer_designed: "Designed to showcase São Paulo's rich gastronomic heritage."
  },
  ar: {
    meta_title: "مطعم بار دو جيبا | أسطورة البوتيكو البرازيلي في مويما - ساو باولو",
    meta_desc: "اكتشف مطعم وبار Bar do Giba الشهير في مويما، ساو باولو. أفضل فطائر باستيل مقرمشة، مقبلات برازيلية حائزة على جوائز، فيجوادا وكوكتيلات طبيعية.",
    nav_home: "الرئيسية",
    nav_story: "الأصالة والتاريخ",
    nav_menu: "قائمة السبورة",
    nav_reserve: "حجز طاولة",
    nav_gallery: "معرض الصور",
    nav_reviews: "الآراء والجوائز",
    nav_contact: "موقعنا",
    btn_order_now: "طلب مباشر عبر واتساب",
    btn_reserve_table: "احجز طاولتك الآن",
    btn_view_menu: "تصفح قائمة الطعام",
    badge_open: "مفتوح الآن",
    badge_closed: "مغلق حالياً",
    hero_tag: "أعرق معالم البوتيكو البوهيمي في مويما",
    hero_title: "حيث يتحول الباستيل إلى فن، والصداقة إلى تراث",
    hero_subtitle: "لا نستخدم قوائم ورقية بل نكتب أطباقنا اليومية بالطباشير على الجدران. مطعم ساو باولو العريق الحائز على جوائز Veja SP والذي أسر قلوب عشاق النكهات الأصيلة.",
    stats_years: "سنوات من العراقة",
    stats_pasteis: "آلاف فطائر الباستيل الطازجة",
    stats_awards: "جوائز مجلة Veja SP",
    stats_rating: "تقييم غوغل",
    story_badge: "قصتنا وتراثنا",
    story_title: "روح البوتيكو البرازيلي الأصيل في قلب مويما",
    story_p1: "في قلب شارع أفينيدا مواتشي، تأسس **Bar do Giba** بدافع الشغف بالطعام اللذيذ، والمشروبات الباردة، وحفاوة الاستقبال البرازيلية. هنا، يتم الاستغناء عن القوائم التقليدية وتُكتب أطباق اليوم الطازجة على **سبورات الطباشير العتيقة** المثبتة على جدران الطوب الكلاسيكية.",
    story_p2: "اختير مراراً كأحد أفضل مطاعم البوتيكو في ساو باولو، ليكون الملتقى المثالي للأصدقاء والعائلات والسياح الباحثين عن الطعم البرازيلي الحقيقي وأجواء المدينة الساحرة.",
    story_feature1_title: "عجينة باستيل حرفية ومقرمشة",
    story_feature1_desc: "تُقلى طازجة عند الطلب بقشرة ذهبية هشة وحشوات غنية لا تقاوم.",
    story_feature2_title: "مقبلات حائزة على جوائز",
    story_feature2_desc: "وصفات عائلية عريقة نالت إشادة كبار نقاد الطهي في البرازيل.",
    story_feature3_title: "كوكتيلات الفواكه الطبيعية",
    story_feature3_desc: "فواكه استوائية طازجة متبلة بلمسات مميزة تمنح انتعاشاً استثنائياً.",
    menu_badge: "سبورة جيبا الرقمية",
    menu_title: "قائمة الطعام التفاعلية والأطباق المميزة",
    menu_subtitle: "اختر أطباقك المفضلة من سبورتنا التفاعلية وأرسل طلبك مباشرة إلى المطعم عبر واتساب!",
    menu_tab_all: "جميع الأصناف",
    menu_tab_pasteis: "🥟 فطائر الباستيل",
    menu_tab_petiscos: "🥩 مقبلات البوتيكو",
    menu_tab_pratos: "🍲 أطباق الفيجوادا والرئيسية",
    menu_tab_bebidas: "🍹 الكايبيرينيا والمشروبات",
    menu_tab_sobremesas: "🍮 الحلويات البرازيلية",
    menu_search_placeholder: "ابحث عن طبق أو مكوّن (مثال: روبيان، فيجوادا، لحم مجفف)...",
    btn_add_to_cart: "إضافة للطلب",
    cart_title: "سلة طلباتك لدى جيبا",
    cart_empty: "سلتك فارغة حالياً. اختر أشهى المأكولات من السبورة!",
    cart_total: "المجموع التقديري:",
    cart_btn_whatsapp: "إرسال الطلب عبر واتساب",
    cart_note: "* سيتم إرسال تفاصيل طلبك مباشرة لرقم واتساب مطعم Bar do Giba لتأكيد التجهيز.",
    reserve_badge: "عش التجربة",
    reserve_title: "احجز طاولتك في Bar do Giba",
    reserve_subtitle: "احجز مقعدك لأعياد الميلاد واللقاءات العائلية واحتفالات الأصدقاء في أجواء لا تُنسى.",
    form_name: "الاسم الكامل",
    form_phone: "رقم الواتساب للتأكيد",
    form_date: "التاريخ المطلوب",
    form_time: "الوقت",
    form_guests: "عدد الأشخاص",
    form_notes: "ملاحظات أو مناسبة خاصة (اختياري)",
    form_btn_submit: "إرسال طلب الحجز عبر واتساب",
    gallery_badge: "الأجواء والمشاهد",
    gallery_title: "لحظات ونكهات لا تُنسى",
    reviews_badge: "آراء النقاد والزوار",
    reviews_title: "ماذا يقول عشاق الطعام ونقاد التذوق",
    contact_badge: "تفضل بزيارتنا",
    contact_title: "العنوان وساعات العمل والوصول",
    contact_address_label: "العنوان في حي مويما",
    contact_hours_label: "أوقات العمل",
    contact_phone_label: "الهاتف والاستفسارات",
    contact_social_label: "تابعنا على إنستغرام",
    footer_rights: "Bar do Giba - مويما، ساو باولو. جميع الحقوق محفوظة.",
    footer_designed: "موقع صُمم للاحتفاء بالتراث الغذائي العريق لمدينة ساو باولو."
  }
};
