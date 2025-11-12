export const users = [
  {
    id: 1,
    email: 'user@ecomarket.com',
    password: '123456',
    name: 'Maria Silva',
    points: 350,
    purchases: []
  }
];

export const sustainabilityLevels = {
  HIGH: { value: 'HIGH', label: 'Alta', color: '#10b981', points: 50 },
  MEDIUM: { value: 'MEDIUM', label: 'Média', color: '#f59e0b', points: 30 },
  LOW: { value: 'LOW', label: 'Baixa', color: '#6b7280', points: 10 }
};

export const categories = [
  'Todos',
  'Roupas',
  'Casa e Jardim',
  'Cuidados Pessoais',
  'Alimentos e Bebidas',
  'Eletrônicos',
  'Acessórios'
];

export const products = [
  {
    id: 1,
    name: 'Camiseta de Algodão Orgânico',
    category: 'Roupas',
    price: 29.99,
    sustainability: 'HIGH',
    certifications: ['Orgânico', 'Comércio Justo'],
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
    description: 'Feita de 100% algodão orgânico, esta camiseta é macia, confortável e ecologicamente correta. Produzida com práticas trabalhistas justas.',
    materials: 'Algodão Orgânico',
    impact: 'Reduz o uso de água em 91% em comparação com algodão convencional',
    stock: 15
  },
  {
    id: 2,
    name: 'Kit de Escovas de Bambu',
    category: 'Cuidados Pessoais',
    price: 12.99,
    sustainability: 'HIGH',
    certifications: ['Biodegradável', 'Vegano'],
    image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=500&h=500&fit=crop',
    description: 'Kit de escovas de dentes ecológicas de bambu. Alternativa biodegradável e livre de plástico às escovas tradicionais.',
    materials: 'Bambu Sustentável, Cerdas à base de plantas',
    impact: 'Evita que 4 escovas de plástico acabem em aterros sanitários por ano',
    stock: 30
  },
  {
    id: 3,
    name: 'Garrafa de Aço Inoxidável Reutilizável',
    category: 'Acessórios',
    price: 24.99,
    sustainability: 'HIGH',
    certifications: ['Livre de BPA', 'Reciclável'],
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=500&fit=crop',
    description: 'Garrafa durável de aço inoxidável que mantém bebidas frias por 24h ou quentes por 12h. Substitui centenas de garrafas plásticas.',
    materials: 'Aço Inoxidável de Grau Alimentício',
    impact: 'Pode substituir até 1.460 garrafas plásticas descartáveis por ano',
    stock: 20
  },
  {
    id: 4,
    name: 'Mochila de Plástico Reciclado',
    category: 'Acessórios',
    price: 49.99,
    sustainability: 'MEDIUM',
    certifications: ['Material Reciclado'],
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
    description: 'Mochila elegante e funcional feita de garrafas plásticas recicladas. Resistente à água e durável.',
    materials: 'Plástico PET reciclado (20 garrafas)',
    impact: 'Desvia resíduos plásticos dos oceanos e reduz produção de plástico virgem',
    stock: 12
  },
  {
    id: 5,
    name: 'Carregador Solar para Celular',
    category: 'Eletrônicos',
    price: 39.99,
    sustainability: 'HIGH',
    certifications: ['Energia Solar', 'Eficiência Energética'],
    image: 'https://images.unsplash.com/photo-1593642532400-2682810df593?w=500&h=500&fit=crop',
    description: 'Carregador solar portátil para seus dispositivos. Perfeito para atividades ao ar livre e redução do consumo de eletricidade.',
    materials: 'Painéis solares, carcaça de plástico reciclado',
    impact: 'Gera energia limpa e reduz dependência da eletricidade da rede',
    stock: 8
  },
  {
    id: 6,
    name: 'Grãos de Café Orgânico',
    category: 'Alimentos e Bebidas',
    price: 18.99,
    sustainability: 'HIGH',
    certifications: ['Orgânico', 'Comércio Justo', 'Rainforest Alliance'],
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&h=500&fit=crop',
    description: 'Grãos de café orgânico premium de fazendas sustentáveis. Sabor rico com produção ética.',
    materials: 'Grãos de Café Orgânico',
    impact: 'Apoia agricultura sustentável e protege habitats de florestas tropicais',
    stock: 25
  },
  {
    id: 7,
    name: 'Envoltórios de Cera de Abelha',
    category: 'Casa e Jardim',
    price: 16.99,
    sustainability: 'HIGH',
    certifications: ['Compostável', 'Livre de Plástico'],
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&h=500&fit=crop',
    description: 'Envoltórios reutilizáveis feitos com algodão orgânico e cera de abelha. Substitua o filme plástico e mantenha alimentos frescos naturalmente.',
    materials: 'Algodão orgânico, cera de abelha, óleo de jojoba',
    impact: 'Elimina filme plástico descartável da sua cozinha',
    stock: 18
  },
  {
    id: 8,
    name: 'Tapete de Yoga Ecológico',
    category: 'Acessórios',
    price: 44.99,
    sustainability: 'MEDIUM',
    certifications: ['Borracha Natural', 'Não-tóxico'],
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&h=500&fit=crop',
    description: 'Tapete de yoga de borracha natural com excelente aderência. Biodegradável e livre de produtos químicos nocivos.',
    materials: 'Borracha natural, fibra de juta',
    impact: 'Alternativa biodegradável aos tapetes sintéticos de PVC',
    stock: 10
  },
  {
    id: 9,
    name: 'Pack de Lâmpadas LED Eficientes',
    category: 'Casa e Jardim',
    price: 22.99,
    sustainability: 'MEDIUM',
    certifications: ['Energy Star', 'Longa Duração'],
    image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=500&h=500&fit=crop',
    description: 'Pacote de 4 lâmpadas LED que usam 75% menos energia que lâmpadas tradicionais. Dura até 25.000 horas.',
    materials: 'Componentes LED, materiais recicláveis',
    impact: 'Reduz consumo de energia e pegada de carbono em 75%',
    stock: 35
  },
  {
    id: 10,
    name: 'Conjunto de Cadernos de Papel Reciclado',
    category: 'Acessórios',
    price: 14.99,
    sustainability: 'MEDIUM',
    certifications: ['Papel Reciclado', 'Certificado FSC'],
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&h=500&fit=crop',
    description: 'Conjunto de 3 cadernos feitos de 100% papel reciclado. Perfeito para diário, notas e esboços.',
    materials: '100% papel reciclado',
    impact: 'Salva árvores e reduz resíduos de papel em aterros',
    stock: 40
  },
  {
    id: 11,
    name: 'Kit de Sabonetes Naturais',
    category: 'Cuidados Pessoais',
    price: 19.99,
    sustainability: 'HIGH',
    certifications: ['Orgânico', 'Cruelty-Free', 'Livre de Óleo de Palma'],
    image: 'https://media.istockphoto.com/id/465375378/photo/lavander-soap.webp?a=1&s=612x612&w=0&k=20&c=VsDbNp-kx6G0FfWSiXnQ-tcWNCHHDLBDAEd8l8clLrM=',
    description: 'Sabonetes naturais artesanais com óleos essenciais. Sem embalagem e suave para a pele.',
    materials: 'Óleos orgânicos, óleos essenciais, extratos botânicos',
    impact: 'Elimina garrafas plásticas e produtos químicos nocivos dos sistemas hídricos',
    stock: 28
  },
  {
    id: 12,
    name: 'Lixeira de Compostagem para Cozinha',
    category: 'Casa e Jardim',
    price: 34.99,
    sustainability: 'HIGH',
    certifications: ['Sem Odor', 'Reciclável'],
    image: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=500&h=500&fit=crop',
    description: 'Lixeira de compostagem compacta para cozinha com filtro de carvão. Transforme restos de comida em composto rico em nutrientes.',
    materials: 'Aço inoxidável, filtros de carvão',
    impact: 'Desvia resíduos orgânicos de aterros e cria fertilizante natural',
    stock: 14
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'João Santos',
    text: 'Adoro comprar na EcoMarket! Cada compra me faz sentir bem por ajudar o planeta.',
    rating: 5
  },
  {
    id: 2,
    name: 'Ana Costa',
    text: 'A qualidade dos produtos sustentáveis aqui é incrível. Super recomendo!',
    rating: 5
  },
  {
    id: 3,
    name: 'Pedro Lima',
    text: 'Ótima seleção e o sistema de pontos me incentiva a continuar fazendo escolhas ecológicas.',
    rating: 4
  }
];

