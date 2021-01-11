class EntitaApi {
    verbo: string;
    nome: string;
    fineUrl: string;
    testo:string;
    constructor(verbo: string, nome: string, fineurl: string) {
        this.verbo = verbo;
        this.nome = nome;
        this.fineUrl = fineurl;
        this.testo =`            
        @${verbo}('${fineurl}')
        private async api${nome}(req: Request, res: Response): Promise<Response> {
            try {
                LogBase(req);
                return res.status(StatusCodes.OK).send('Strumento creato.');
            } catch (error) {
                return res.status().send('Errore : ' + error);
            }
        }
            `;
    }
}
