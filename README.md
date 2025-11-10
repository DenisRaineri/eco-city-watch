# EcoCity Watch 🌱

**Monitor Ambiental Urbano**

Aplicativo móvel desenvolvido para monitoramento de condições ambientais urbanas, criado como projeto acadêmico para a **UNIP** (Universidade Paulista).

**Desenvolvido por:** Denis Raineri  
**Instituição:** UNIP - 8º Semestre  
**Ano:** 2025

## 📱 Sobre o Projeto

O EcoCity Watch é uma aplicação React Native desenvolvida com Expo que permite aos usuários monitorar diversos aspectos ambientais urbanos em tempo real, incluindo qualidade do ar, condições de tráfego, riscos de enchentes e outros indicadores ambientais importantes para a vida urbana.

## ✨ Funcionalidades

### 🏠 Dashboard Principal
- Visão geral das condições ambientais
- Métricas em tempo real de qualidade do ar, tráfego, temperatura
- Alertas de desmatamento e fontes de água
- Informações de localização via GPS

### 🗺️ Mapa Interativo
- Visualização de incidentes ambientais no mapa
- Marcadores coloridos por nível de severidade
- Funcionalidade para reportar novos incidentes
- Suporte para web e dispositivos móveis

### 📊 Relatórios
- Lista de incidentes ambientais recentes
- Status de investigação (Ativo, Investigando, Resolvido)
- Informações detalhadas de localização e timestamp

### 📈 Analytics
- Métricas e tendências ambientais
- Comparação com períodos anteriores
- Indicadores de qualidade do ar, água, temperatura e tráfego
- Resumos semanais automatizados

### ⚙️ Configurações
- Preferências de notificações
- Controle de serviços de localização
- Modo escuro/claro
- Configurações de idioma e privacidade

## 🛠️ Tecnologias Utilizadas

- **React Native** - Framework principal
- **Expo** - Plataforma de desenvolvimento
- **TypeScript** - Linguagem de programação
- **Expo Router** - Navegação
- **React Native Maps** - Mapas interativos
- **Lucide React Native** - Ícones
- **Expo Location** - Serviços de geolocalização
- **Expo Camera** - Funcionalidades de câmera

## 📦 Dependências Principais

```json
{
  "expo": "52.0.33",
  "react": "18.3.1",
  "react-native": "0.76.6",
  "expo-router": "4.0.17",
  "react-native-maps": "1.10.0",
  "expo-location": "~16.5.5",
  "lucide-react-native": "^0.475.0"
}
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn
- Expo CLI
- Dispositivo móvel com Expo Go ou emulador

### Instalação

1. Clone o repositório:
```bash
git clone [url-do-repositorio]
cd eco-city-watch
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Escaneie o QR code com o Expo Go ou execute em um emulador.

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build:web` - Gera build para web
- `npm run lint` - Executa verificação de código

## 📱 Plataformas Suportadas

- ✅ iOS
- ✅ Android  
- ✅ Web (com limitações no mapa)

## 🏗️ Estrutura do Projeto

```
eco-city-watch/
├── app/
│   ├── (tabs)/
│   │   ├── index.tsx      # Dashboard principal
│   │   ├── map.tsx        # Mapa interativo
│   │   ├── reports.tsx    # Relatórios
│   │   ├── analytics.tsx  # Analytics
│   │   └── settings.tsx   # Configurações
│   ├── _layout.tsx        # Layout raiz
│   └── +not-found.tsx     # Página 404
├── assets/
│   └── images/            # Ícones e imagens
├── hooks/
│   └── useFrameworkReady.ts
├── package.json
├── app.json
└── README.md
```

## 🎯 Objetivos Acadêmicos

Este projeto foi desenvolvido como parte do currículo do 8º semestre da UNIP, com os seguintes objetivos de aprendizado:

- Desenvolvimento de aplicações móveis multiplataforma
- Implementação de interfaces responsivas
- Integração com APIs de geolocalização
- Gerenciamento de estado em React Native
- Boas práticas de desenvolvimento mobile
- Experiência do usuário (UX/UI)

## 🌍 Impacto Ambiental

O EcoCity Watch visa contribuir para:
- Conscientização ambiental urbana
- Monitoramento participativo de condições ambientais
- Tomada de decisões baseada em dados ambientais
- Promoção de cidades mais sustentáveis

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos na UNIP.

## 👨‍💻 Autor

**Denis Raineri**  
Estudante de Engenharia/Tecnologia - UNIP  
8º Semestre - 2025

---

*Projeto desenvolvido com 💚 para um futuro mais sustentável*