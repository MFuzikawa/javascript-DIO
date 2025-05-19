interface IAnimal{
    nome: string;
    tipo: 'terrestre' | 'aquatico';
    domestico: boolean;
}
interface IFelino extends IAnimal{
    visaoNoturna: boolean
}

interface ICaninos extends IAnimal{
    porte: 'pequeno' | 'medio' |'grande'
}

type IDomestico = IFelino | ICaninos

const animal: IDomestico= {
    domestico: true,
    nome:'cachorro',
    porte:'medio',
    tipo:'terrestre',
}

