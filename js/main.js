// Dicionário de templates (conteúdos HTML das seções da SPA)
const routes = {
    '#inicio': `
        <section id="apresentacao">
            <h2>Sobre a Nossa Organização</h2>
            <p>A ONG Esperança Viva é uma organização sem fins lucrativos dedicada a promover a inclusão social e o apoio a famílias em situação de vulnerabilidade.</p>
            <p>A nossa missão é criar oportunidades através do voluntariado, programas educativos e ações diretas na comunidade.</p>
            <img src="Imagem/ONG_equipe.png" alt="Equipe de voluntários da ONG reunida sorrindo em uma ação comunitária de distribuição de alimentos">
        </section>

        <section id="frentes-atuacao">
            <h2>Nossas Frentes de Atuação</h2>
            <article>
                <h3>Apoio Comunitário</h3>
                <p>Assistência direta a famílias em situação de vulnerabilidade social e distribuição de mantimentos.</p>
            </article>
            <article>
                <h3>Educação e Cultura</h3>
                <p>Oficinas educativas, cursos de capacitação técnica e atividades culturais para crianças e jovens.</p>
            </article>
        </section>

        <section id="contato">
            <h2>Dados de Contato</h2>
            <p>Entre em contato com a nossa equipe para tirar dúvidas, propor parcerias ou saber mais sobre o nosso trabalho:</p>
            <ul>
                <li><strong>Endereço:</strong> Rua da Solidariedade, nº 100 - Bairro Central, Brasília - DF</li>
                <li><strong>Telefone:</strong> (61) 3333-4444</li>
                <li><strong>E-mail:</strong> contato@esperancaviva.org.br</li>
                <li><strong>Horário de Atendimento:</strong> Segunda a Sexta, das 08h às 17h</li>
            </ul>
        </section>
    `,

    '#projetos': `
        <section id="voluntariado">
            <h2>Trabalho Voluntário</h2>
            <p>Conheça as nossas frentes de atuação e saiba como pode contribuir com o seu tempo e talento:</p>

            <article id="prato-cheio">
                <h3>Projeto Prato Cheio</h3>
                <img src="Imagem/prato-cheio.png" alt="Um prato de comida com arroz, feijão, filé de frango grelhado, salada fresca e macarrão">
                <p>Atuação na arrecadação, organização e distribuição de refeições e cestas básicas para famílias em situação de vulnerabilidade.</p>
                <ul>
                    <li><strong>Perfis necessários:</strong> Auxiliar de cozinha, motorista e organizador de logística.</li>
                    <li><strong>Disponibilidade:</strong> Aos sábados, das 08h às 12h.</li>
                </ul>
                <p><a href="#cadastro" class="btn">Quero ser voluntário neste projeto</a></p>
            </article>

            <article id="futuro-digital">
                <h3>Projeto Futuro Digital</h3>
                <img src="Imagem/sala de aula.png" alt="Sala de aula de computação moderna">
                <p>Aulas gratuitas de informática básica e capacitação digital para jovens da comunidade.</p>
                <ul>
                    <li><strong>Perfis necessários:</strong> Instrutores de tecnologia e monitores de turma.</li>
                    <li><strong>Disponibilidade:</strong> Terças e quintas, das 14h às 16h.</li>
                </ul>
                <p><a href="#cadastro" class="btn">Quero ser voluntário neste projeto</a></p>
            </article>
        </section>

        <section id="doacoes">
            <h2>Campanhas de Doação</h2>
            <p>A sua contribuição financeira permite a continuidade e expansão das nossas ações sociais.</p>

            <article>
                <h3>Doação Pontual</h3>
                <p>Contribua com qualquer valor para apoiar a compra imediata de suprimentos e materiais educativos.</p>
                <p><a href="#cadastro" class="btn">Fazer uma doação pontual</a></p>
            </article>

            <article>
                <h3>Doador Recorrente (Madrinha/Padrinho)</h3>
                <p>Apoie mensalmente um dos nossos programas e ajude a garantir o impacto a longo prazo nas comunidades atendidas.</p>
                <p><a href="#cadastro" class="btn">Tornar-me doador recorrente</a></p>
            </article>
        </section>
    `,

    '#futuro-digital': `
        <section class="detalhes-curso">
            <span class="badge-vagas">Inscrições Abertas - Turma 2026.2</span>
            <h2>Curso Gratuito de Informática e Inclusão Digital</h2>
            
            <img src="Imagem/sala de aula.png" alt="Sala de aula de computação moderna com computadores preparados para os alunos">

            <p>O <strong>Projeto Futuro Digital</strong> oferece capacitação gratuita em tecnologia para jovens e adultos da comunidade. Aprenda desde a navegação básica até ferramentas essenciais para o mercado de trabalho.</p>

            <h3>O que você vai aprender:</h3>
            <ul>
                <li>Informática Básica e Sistema Operacional;</li>
                <li>Navegação segura na Internet e E-mail;</li>
                <li>Editor de Textos, Planilhas e Apresentações (Pacote Office/Google Workspace);</li>
                <li>Introdução à Programação e Criação de Páginas Web.</li>
            </ul>

            <p><strong>Duração:</strong> 3 meses | <strong>Aulas:</strong> Terças e Quintas (das 14h às 16h) | <strong>Local:</strong> Sede da ONG Esperança Viva.</p>
            
            <p style="margin-top: 1.5rem;">
                <a href="#form-aluno" class="btn">Garantir Minha Vaga / Inscrever-me</a>
            </p>
        </section>

        <form action="#" method="post" id="form-aluno">
            <h2>Formulário de Inscrição para Alunos</h2>

            <fieldset>
                <legend>Dados do Aluno</legend>

                <div>
                    <label for="nome-aluno">Nome Completo do Aluno:</label>
                    <input type="text" id="nome-aluno" name="nome-aluno" required minlength="3" placeholder="Digite seu nome completo">
                </div>

                <div>
                    <label for="nascimento-aluno">Data de Nascimento:</label>
                    <input type="date" id="nascimento-aluno" name="nascimento-aluno" required>
                </div>

                <div>
                    <label for="escola">Escolaridade / Ano Atual:</label>
                    <select id="escola" name="escola" required>
                        <option value="">Selecione...</option>
                        <option value="fundamental-cursando">Ensino Fundamental (Cursando)</option>
                        <option value="medio-cursando">Ensino Médio (Cursando)</option>
                        <option value="medio-concluido">Ensino Médio (Concluído)</option>
                        <option value="outro">Outro</option>
                    </select>
                </div>
            </fieldset>

            <fieldset>
                <legend>Contato do Aluno ou Responsável</legend>

                <div>
                    <label for="nome-responsavel">Nome do Responsável (se menor de idade):</label>
                    <input type="text" id="nome-responsavel" name="nome-responsavel" placeholder="Nome do pai, mãe ou responsável">
                </div>

                <div>
                    <label for="tel-aluno">Telefone / WhatsApp de Contato:</label>
                    <input type="tel" id="tel-aluno" name="tel-aluno" required pattern="[0-9]{10,11}" placeholder="61999999999" title="Digite DDD e número sem espaços">
                </div>

                <div>
                    <label for="turno">Turno de Preferência:</label>
                    <select id="turno" name="turno" required>
                        <option value="">Selecione um turno...</option>
                        <option value="tarde">Tarde (14h às 16h)</option>
                        <option value="noite">Noite (19h às 21h - Fila de Espera)</option>
                    </select>
                </div>
            </fieldset>

            <button type="submit">Garantir Minha Vaga no Curso</button>
        </form>
    `,

    '#cadastro': `
        <section class="formulario">
            <h2>Junte-se a Nós</h2>
            <p>Faça a sua inscrição para apoiar ou participar das nossas atividades como voluntário ou doador.</p>
            
            <form id="form-cadastro">
                <fieldset>
                    <legend>Identificação e Contato</legend>
                    
                    <div>
                        <label for="nome">Nome Completo:</label>
                        <input type="text" id="nome" name="nome" placeholder="Digite seu nome completo" required>
                    </div>

                    <div>
                        <label for="email">E-mail:</label>
                        <input type="email" id="email" name="email" placeholder="seuemail@exemplo.com" required>
                    </div>

                    <div>
                        <label for="telefone">Telefone / WhatsApp:</label>
                        <input type="tel" id="telefone" name="telefone" placeholder="(61) 99999-9999" required>
                    </div>

                    <div>
                        <label for="nascimento">Data de Nascimento:</label>
                        <input type="date" id="nascimento" name="nascimento" required>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Tipo de Engajamento</legend>

                    <div>
                        <label for="tipo-participacao">Como deseja contribuir?</label>
                        <select id="tipo-participacao" name="tipo-participacao" required>
                            <option value="">Selecione uma opção...</option>
                            <option value="voluntario-prato">Voluntário - Projeto Prato Cheio</option>
                            <option value="voluntario-futuro">Voluntário - Projeto Futuro Digital</option>
                            <option value="doador-pontual">Doador Pontual</option>
                            <option value="doador-recorrente">Doador Recorrente (Madrinha/Padrinho)</option>
                        </select>
                    </div>

                    <div>
                        <label for="mensagem">Mensagem / Observações (Opcional):</label>
                        <textarea id="mensagem" name="mensagem" rows="4" placeholder="Conte-nos um pouco sobre a sua motivação ou disponibilidade..."></textarea>
                    </div>
                </fieldset>

                <button type="submit">Enviar Inscrição</button>
            </form>
        </section>
    `
};

// Elemento principal (contêiner onde o conteúdo é injetado)
const appContainer = document.getElementById('app-content');

// Função central para renderizar o conteúdo dinamicamente
function renderRoute() {
    // Captura o hash atual da URL ou define '#inicio' como padrão
    const hash = window.location.hash || '#inicio';

    // Obtém o template correspondente ou exibe página não encontrada (404)
    const content = routes[hash] || '<h2>404 - Página Não Encontrada</h2>';

    // Limpa o contêiner alvo e injeta o novo fragmento de HTML
    if (appContainer) {
        appContainer.innerHTML = content;
    }

    // Atualiza o estado ativo no menu de navegação
    updateActiveMenu(hash);
}

// Atualização visual das rotas ativas no menu
function updateActiveMenu(currentHash) {
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === currentHash) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Intercepta a alteração de rota na URL
window.addEventListener('hashchange', renderRoute);

// Renderização inicial no carregamento da página
window.addEventListener('DOMContentLoaded', renderRoute);