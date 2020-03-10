const posts = [
  {
    id: 1,
    author: {
      name: "Daniel José Padilha",
      avatar: "https://i.pravatar.cc/300"
    },
    date: "04 Jun 2019",
    content: "Bom dia! Esse é um pequeno clone do facebook usando Class components, afim de revisar o conhecimento",
    comments: [
      {
        id: 1,
        author: {
          name: "Diego Fernandes",
          avatar: "https://i.pravatar.cc/300"
        },
        content: "Esse projeto também usa styled-components, que deixa o css ainda mais intuitivo!"
      }
    ]
  },
  {
    id: 2,
    author: {
      name: "Daniel José Padilha",
      avatar: "https://i.pravatar.cc/300"
    },
    date: "04 Jun 2019",
    content: "Quer saber mais sobre os meus projetos?",
    comments: [
      {
        id: 1,
        author: {
          name: "Diego Fernandes",
          avatar: "https://i.pravatar.cc/300"
        },
        content: "Acesse: danielpadilhadev.com, ou o meu github: github.com/danjosepad"
      }
    ]
  },
]

export default posts;