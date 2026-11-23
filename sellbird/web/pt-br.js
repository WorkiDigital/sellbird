// Portuguese UI copy. Keep API values, commands, user content and stored states unchanged.
// The dashboard renders most screens after fetches, so translate new DOM nodes as they arrive.
(() => {
  'use strict';
  const copy = {
    'Dashboard locked':'Painel bloqueado', 'Dashboard token':'Token do painel', 'Unlock':'Desbloquear',
    'Make the first move.':'Dê o primeiro passo.', 'Work':'Trabalho', 'Today':'Hoje',
    'Your company':'Sua empresa', 'Outbox':'Caixa de saída', 'Inboxes':'Caixas de entrada',
    'Conversations':'Conversas', 'Pipeline':'Funil', 'Signals':'Sinais',
    'Discover':'Descobrir', 'Companies':'Empresas', 'Contacts':'Contatos',
    'Campaigns':'Campanhas', 'System':'Sistema', 'Activity':'Atividade',
    'Usage':'Uso', 'Controls':'Controles', 'Settings':'Configurações', 'Help':'Ajuda',
    'Follow @sellbirdagent':'Siga @sellbirdagent', 'Checking…':'Verificando…',
    'Refresh':'Atualizar', 'Refresh this page':'Atualizar esta página',
    'Appearance':'Aparência', 'Match your computer':'Seguir o sistema', 'Light':'Claro', 'Dark':'Escuro',
    'Sections':'Seções', 'Loading...':'Carregando...', 'Loading…':'Carregando…',
    'Locked':'Bloqueado', 'Offline':'Sem conexão', 'Running':'Em execução', 'Stopped':'Parado',
    'Open the link that ':'Abra o link que ',
    'printed in your terminal,\n      or run ':'foi exibido no terminal,\n      ou execute ',
    'to print it again. You can also paste the\n      token from ':'para exibi-lo novamente. Você também pode colar o\n      token de ',
    "What's waiting on you, and how the pipeline is moving.":'O que precisa da sua atenção e como o funil está avançando.',
    'Needs you':'Precisa de você', 'Nothing needs you':'Nada precisa da sua atenção',
    'Pipeline right now':'Funil neste momento', 'Recent activity':'Atividade recente',
    'See all':'Ver tudo', 'Contacts by stage':'Contatos por etapa', 'Collector runs':'Buscas realizadas',
    "Everything Sellbird writes from: what you sell, who you sell to, the offer every first email ends with, and who it's from. Edit any of it here, or talk it through with your coding agent.":'A base dos textos do Sellbird: o que você vende, para quem vende, a oferta no fim de cada primeiro email e quem assina. Edite tudo aqui ou converse com seu agente de programação.',
    'Sellbird proposes what it knows how to look for. You decide what actually\n         defines a good prospect — nothing is collected until you confirm it.':'O Sellbird sugere os sinais que consegue encontrar. Você decide o que define um bom cliente potencial. Nenhuma coleta começa antes da sua confirmação.',
    'Cohort builder':'Criar segmento',
    'A prospect list is a query, not a file. Pick the signals a\n      good prospect must have — and any that disqualify them — and see\n      how many companies match right now.':'Uma lista de clientes potenciais é uma consulta dinâmica. Escolha os sinais obrigatórios e os que desqualificam empresas para ver quantas correspondem agora.',
    'Find businesses matching your ICP. Pick a source, see what it will cost,\n         then run it — nothing is called until you press the button.':'Encontre empresas que correspondem ao seu perfil de cliente ideal. Escolha uma fonte, confira o custo e inicie a busca quando quiser.',
    'Source':'Fonte', 'Run':'Executar', 'Look for':'Procurar',
    "Your ICP's industries":'Setores do seu cliente ideal', 'YC startups':'Startups da YC',
    'Accelerator startups':'Startups de aceleradoras', 'Recently funded':'Financiadas recentemente',
    'Companies hiring for your roles':'Empresas contratando para seus cargos',
    'Cities':'Cidades', 'Results per query':'Resultados por consulta', 'Search depth':'Profundidade da busca',
    'Spend cap ($)':'Limite de gastos (US$)', 'Estimate cost':'Estimar custo',
    'Estimate first':'Estime o custo primeiro', 'Stop':'Parar',
    'Organizations Sellbird has researched, best fit first. Click a row to see its contacts.':'Empresas pesquisadas pelo Sellbird, começando pelas mais alinhadas. Clique em uma linha para ver os contatos.',
    'Export register':'Exportar cadastro',
    'People Sellbird has found, how sure it is of their address, and where each one stands.':'Pessoas encontradas, grau de confiança no endereço de email e etapa de cada contato.',
    'Export deliverable':'Exportar contatos válidos', 'Export all':'Exportar tudo',
    'Email sequences Sellbird has written, and how far each one has got.':'Sequências de emails criadas pelo Sellbird e o andamento de cada uma.',
    'Emails waiting for you. Read one, decide, move on —':'Emails aguardando sua decisão. Leia, decida e passe ao próximo —',
    'approve,':'aprovar,', 'reject,':'rejeitar,', 'edit,':'editar,', 'to move.':'para navegar.',
    'Every reply, and how Sellbird handled it.':'Todas as respostas recebidas e como o Sellbird lidou com elas.',
    'The email addresses Sellbird sends from. Each one sends a limited number of cold emails a day, so more inboxes means more emails out. Replies stay on the inbox that started the thread.':'Endereços usados pelo Sellbird para enviar emails. Cada caixa tem um limite diário; adicionar caixas aumenta a capacidade de envio. As respostas ficam na caixa que iniciou a conversa.',
    "A running log of every action Sellbird's agents have taken.":'Registro das ações realizadas pelos agentes do Sellbird.',
    "Model usage on your subscription (Claude or Codex): calls and tokens by provider, agent and task. Subscription plans aren't billed per token, so there are no dollar costs here.":'Uso de modelos na sua assinatura Claude ou Codex: chamadas e tokens por provedor, agente e tarefa. Assinaturas não são cobradas por token, então não há valores em dólares aqui.',
    'Credentials are stored locally in ':'As credenciais ficam armazenadas localmente em ',
    'and never sent anywhere except the services themselves.':'e são enviadas somente aos próprios serviços.',
    'Sending':'Envio', 'Email provider':'Provedor de email', 'Active:':'Ativo:',
    'Recommended':'Recomendado', 'Client ID':'ID do cliente', 'Client secret':'Segredo do cliente',
    'Show':'Mostrar', 'Hide':'Ocultar', 'Save Gmail':'Salvar Gmail',
    'Use a mailbox on a dedicated secondary domain. Create an OAuth client (type "Desktop app") in Google Cloud Console → Gmail API, paste the id and secret, save, then sign in on the Inboxes tab (or run ':'Use uma caixa em um domínio secundário dedicado. Crie um cliente OAuth do tipo "Aplicativo para computador" no Google Cloud Console → API do Gmail, cole o ID e o segredo, salve e entre na aba Caixas de entrada (ou execute ',
    'SMTP + IMAP mailbox':'Caixa SMTP + IMAP', 'Any real mailbox (AgentMail, Fastmail, a Workspace app password). IMAP defaults to the SMTP host and login if left blank.':'Qualquer caixa de email real (AgentMail, Fastmail ou senha de aplicativo do Workspace). Se os campos IMAP ficarem vazios, serão usados o servidor e o usuário SMTP.',
    'SMTP host':'Servidor SMTP', 'Port':'Porta', 'Username':'Usuário', 'Password':'Senha',
    'Reading replies from a different IMAP server or login':'Ler respostas com outro servidor ou usuário IMAP',
    'IMAP host':'Servidor IMAP', 'IMAP username':'Usuário IMAP', 'IMAP password':'Senha IMAP',
    'Use the SMTP password for IMAP':'Usar a senha SMTP para o IMAP', 'Save SMTP':'Salvar SMTP',
    'Microsoft turned off password sign-in for IMAP, so Outlook mailboxes connect with OAuth. In ':'A Microsoft desativou o acesso IMAP por senha. As caixas Outlook usam OAuth. No ',
    '→ App registrations, register an app for your organization only and add the redirect URI ':'→ Registros de aplicativo, registre um aplicativo apenas para sua organização e adicione a URI de redirecionamento ',
    'as "Public client/native". Paste both IDs here, save, then sign in on the Inboxes tab (or run ':'como "Cliente público/nativo". Cole os dois IDs, salve e entre na aba Caixas de entrada (ou execute ',
    '). No client secret is needed.':'). Não é necessário segredo do cliente.',
    'Application (client) ID':'ID do aplicativo (cliente)', 'Directory (tenant) ID':'ID do diretório (locatário)',
    'Save Microsoft 365':'Salvar Microsoft 365', 'Legacy':'Legado',
    'Get your API key from ':'Obtenha sua chave de API em ', 'Instantly Settings → Integrations':'Configurações do Instantly → Integrações',
    '(Growth plan or higher for API).':'(plano Growth ou superior para usar a API).',
    'API key':'Chave de API', 'Test':'Testar', 'Save Instantly':'Salvar Instantly',
    'Email verification':'Verificação de email', 'Strongly recommended':'Altamente recomendado',
    'Verifiers':'Verificadores', 'Add at least one so found emails get verified. Without any, addresses stay ':'Adicione pelo menos um verificador. Sem ele, os emails encontrados permanecem como ',
    'guess':'não verificado', 'and are never sent. Reoon has the best free tier (600 a month).':'e não são usados para envio. O Reoon oferece 600 verificações grátis por mês.',
    'Reoon API key':'Chave de API Reoon', 'ZeroBounce API key':'Chave de API ZeroBounce',
    'Hunter API key':'Chave de API Hunter', 'Save verification keys':'Salvar chaves de verificação',
    'Optional':'Opcional', 'For automated LinkedIn prospecting. Sellbird logs in and searches like a human.':'Para prospecção automatizada no LinkedIn. O Sellbird acessa a conta e faz buscas.',
    'Email or username':'Email ou usuário', 'Save LinkedIn':'Salvar LinkedIn',
    'Deep website crawling with JavaScript rendering during product training. About $5 a month.':'Leitura aprofundada de sites com renderização de JavaScript durante o treinamento do produto. Cerca de US$ 5 por mês.',
    'Account ID':'ID da conta', 'API token':'Token de API', 'Save Cloudflare':'Salvar Cloudflare',
    "Start and stop Sellbird's heartbeat loop, and watch what it's doing.":'Inicie ou pare o ciclo do Sellbird e acompanhe suas ações.',
    'Agent':'Agente', 'Start Sellbird':'Iniciar Sellbird', 'Stop Sellbird':'Parar Sellbird',
    'Recent logs':'Registros recentes', 'No logs yet. Start Sellbird to see activity.':'Ainda não há registros. Inicie o Sellbird para ver a atividade.',
    'What Sellbird is, how it works, and how to fix the usual problems.':'O que é o Sellbird, como funciona e como resolver problemas comuns.',
    'What is Sellbird?':'O que é o Sellbird?',
    'Sellbird is an open-source outreach platform. Once set up, Sellbird runs on its own: finds people who match your ideal customer, writes personalized cold emails, sends them through your email platform, reads every reply, handles objections, and works toward booking a meeting. You review everything through this dashboard.':'O Sellbird é uma plataforma de prospecção de código aberto. Após a configuração, encontra pessoas que correspondem ao cliente ideal, escreve emails personalizados, envia mensagens, lê respostas, lida com objeções e busca agendar reuniões. Você acompanha tudo neste painel.',
    'Sellbird runs on your Claude Max subscription (or, if you opt in, your ChatGPT plan through Codex), so there are no extra AI costs. Everything stays on your machine in one folder.':'O Sellbird usa sua assinatura Claude Max ou, se você optar, seu plano ChatGPT pelo Codex. Não há custo adicional de IA. Os dados ficam em uma pasta no seu computador.',
    'News and updates':'Novidades e atualizações', 'New releases, features and the roadmap are posted first on X: ':'Novas versões, recursos e planos são publicados primeiro no X: ',
    'follow @sellbirdagent':'siga @sellbirdagent', '. Questions and bugs go to ':'. Dúvidas e falhas podem ser relatadas em ',
    'GitHub issues':'issues no GitHub', 'Getting started':'Primeiros passos',
    'There are three things to do:':'Há três passos:',
    '1. Go to the Settings tab and connect an email provider (Gmail recommended)\n2. Train Sellbird on your product (through Claude or the command line)\n3. Go to the Controls tab and click Start':'1. Acesse Configurações e conecte um provedor de email (Gmail recomendado)\n2. Treine o Sellbird com seu produto (pelo Claude ou pela linha de comando)\n3. Acesse Controles e clique em Iniciar',
    "Today shows exactly what's done and what still needs to happen.":'A aba Hoje mostra o que já foi feito e o que ainda falta.',
    'Where everything lives':'Onde ficam os arquivos', 'Everything Sellbird needs is inside this one project folder. Nothing is stored elsewhere.':'Tudo de que o Sellbird precisa fica na pasta do projeto.',
    'Your API keys and credentials (never shared or committed)':'Suas chaves de API e credenciais (nunca compartilhadas ou incluídas em commits)',
    'Your product info, target customers, and behavior settings':'Informações do produto, clientes ideais e configurações de comportamento',
    'Sales knowledge files. Edit these to change how Sellbird writes and sells.':'Arquivos de conhecimento de vendas. Edite para ajustar os textos e a abordagem do Sellbird.',
    'Everything Sellbird knows about your product (auto-generated from training)':'Tudo o que o Sellbird aprendeu sobre seu produto (gerado no treinamento)',
    'Prompt templates for each agent. Advanced customization.':'Modelos de prompt de cada agente. Personalização avançada.',
    'Database with all prospects, campaigns, and conversations':'Banco de dados de contatos, campanhas e conversas',
    'Log file showing what Sellbird is doing':'Arquivo de registro das ações do Sellbird',
    'Getting your API keys':'Como obter chaves de API', 'Instantly API key (legacy)':'Chave de API Instantly (legado)',
    'Instantly is the legacy sending option; Gmail or SMTP is recommended.':'Instantly é a opção antiga de envio; Gmail ou SMTP são recomendados.',
    'LinkedIn credentials (optional)':'Credenciais do LinkedIn (opcional)',
    'Cloudflare Browser Rendering (optional)':'Renderização de navegador Cloudflare (opcional)',
    'Common issues':'Problemas comuns', 'Sellbird isn\'t finding prospects':'Sellbird não encontra clientes potenciais',
    'Claude headless mode fails':'O modo sem interface do Claude falha', 'Codex calls fail':'As chamadas do Codex falham',
    'You need to activate the virtual environment first: ':'Primeiro, ative o ambiente virtual: ',
    'Search name, company, email':'Buscar nome, empresa ou email', 'Filter by status':'Filtrar por status',
    'Filter conversations':'Filtrar conversas', 'Export CSV':'Exportar CSV',
    'Exporting…':'Exportando…', 'Export failed — retry':'Falha ao exportar — tente novamente',
    'No usage recorded yet':'Ainda não há uso registrado', 'Output tokens per day':'Tokens de saída por dia',
    'Last 7 Days':'Últimos 7 dias', 'Last 30 Days':'Últimos 30 dias',
    'Nothing to review':'Nada para revisar', 'Confirm all':'Confirmar tudo', 'Skip all':'Pular tudo',
    'Must have':'Obrigatório', 'Must not have':'Não pode ter', 'Yesterday':'Ontem',
    'Close':'Fechar', 'Save':'Salvar', 'Cancel':'Cancelar', 'Edit':'Editar',
    'Approve':'Aprovar', 'Reject':'Rejeitar', 'Delete':'Excluir', 'Add':'Adicionar',
    'Search':'Buscar', 'Continue':'Continuar', 'Retry':'Tentar novamente',
    'New':'Novo', 'Contacted':'Contatado', 'Replied':'Respondeu',
    'Said yes to your offer':'Aceitou sua oferta', 'Interested':'Interessado',
    'Meeting booked':'Reunião agendada', 'Not interested':'Sem interesse',
    'Bounced':'Devolvido', "Couldn't write":'Falha ao escrever',
    'Nothing to write about yet':'Ainda não há assunto para escrever',
    'Queued':'Na fila', 'Opted out':'Descadastrado', 'Draft':'Rascunho',
    'Completed':'Concluído', 'Paused':'Pausado', 'Open':'Aberto', 'Closed':'Fechado',
    'Won':'Ganho', 'Lost':'Perdido', 'Objection':'Objeção', 'Question':'Pergunta',
    'Out of office':'Ausente', 'Wrong person':'Pessoa errada', 'Unsubscribed':'Descadastrado',
    'Needs a human':'Precisa de atendimento humano', 'Waiting on you':'Aguardando você',
    'Approved':'Aprovado', 'Sending now':'Enviando', 'Scheduled':'Agendado',
    'Sent':'Enviado', 'Awaiting reply':'Aguardando resposta', 'Failed':'Falhou',
    'Rejected':'Rejeitado', 'Cancelled':'Cancelado', 'Confirmed':'Confirmado',
    'Verified':'Verificado', 'Catch-all':'Aceita qualquer endereço', 'Unverified':'Não verificado',
    'Invalid':'Inválido', 'Stale':'Desatualizado',
    'Saved — enter new value to change':'Salvo — digite outro valor para alterar',
    'not set':'não configurado', 'authorized':'autorizado', 'sign in on Inboxes':'entre em Caixas de entrada',
    'not set up':'não configurado', 'client ID isn\'t real':'ID de cliente inválido',
    'Enter client secret':'Digite o segredo do cliente', 'Enter password':'Digite a senha',
    'Enter password / app password':'Digite a senha ou senha de aplicativo',
    'Same as SMTP host':'Igual ao servidor SMTP', 'Same as SMTP username':'Igual ao usuário SMTP',
    'Same as SMTP password':'Igual à senha SMTP', 'Same as the SMTP server':'Igual ao servidor SMTP',
    'Same as the address':'Igual ao endereço', 'Your persona name':'Nome da sua persona',
    'Type autopilot to confirm':'Digite autopilot para confirmar',
    'Paste your TrulyInbox API key':'Cole sua chave de API TrulyInbox',
    'Your Cloudflare Account ID':'ID da sua conta Cloudflare',
    'Your Cloudflare API Token':'Token de API Cloudflare',
    '100 free/mo — best for M365/Workspace catch-alls':'100 grátis/mês — ideal para domínios M365/Workspace',
    '50 free/mo + email-pattern lookup':'50 grátis/mês + busca por padrão de email',
    '600 free/mo — reoon.com/email-verifier':'600 grátis/mês — reoon.com/email-verifier',
    'From your ICP, or override: Denver, CO; Boulder, CO':'Use as cidades do cliente ideal ou informe outras: Fortaleza, CE; Recife, PE',
    'About autopilot':'Sobre o envio automático', 'Add an objection':'Adicionar objeção',
    'Add your postal address':'Adicione seu endereço postal', 'Added':'Adicionado',
    'All sending is paused:':'Todos os envios estão pausados:',
    'Answer with':'Responder com', 'Approval':'Aprovação', 'Approval mode':'Modo de aprovação',
    'Autopilot':'Envio automático', 'Autopilot is on':'Envio automático ativado',
    'Cache read':'Leitura do cache', 'Calls':'Chamadas', 'Campaigns sending from it':'Campanhas que enviam por esta caixa',
    'Catch-all, may bounce':'Domínio aceita qualquer endereço; pode haver devolução',
    'Check connection':'Verificar conexão',
    'Choose which inboxes each campaign sends from. Replies always come back to the inbox that started the thread.':'Escolha as caixas de envio de cada campanha. As respostas sempre chegam à caixa que iniciou a conversa.',
    'Close conversation':'Encerrar conversa', 'Cold emails today':'Emails de prospecção hoje',
    'Cold today':'Prospecção hoje', 'Company':'Empresa', 'Company size':'Porte da empresa',
    'Competitors':'Concorrentes', 'Confirm':'Confirmar', 'Confirm undo':'Confirmar reversão',
    'Connect':'Conectar', 'Copy':'Copiar', 'Cost':'Custo',
    'Could not reach the dashboard server.':'Não foi possível acessar o servidor do painel.',
    'Couldn’t load the opt-out record. Try again.':'Não foi possível carregar o descadastro. Tente novamente.',
    'Couldn’t read the sending mode.':'Não foi possível consultar o modo de envio.',
    'Credentials':'Credenciais', 'Daily cold-email cap':'Limite diário de emails de prospecção',
    'Desktop app':'Aplicativo para computador', 'Dismiss':'Dispensar',
    'Domain':'Domínio', 'Email address':'Endereço de email', 'Established':'Consolidado',
    'Feedback':'Avaliação', 'Finish setting up Sellbird':'Conclua a configuração do Sellbird',
    'First emails waiting':'Primeiros emails aguardando envio', 'Fit':'Aderência',
    'Free':'Grátis', 'From training. Retrain with':'Gerado no treinamento. Treine novamente com',
    'Get TrulyInbox':'Obter TrulyInbox', 'Got it':'Entendi',
    'Hand back to Sellbird':'Devolver ao Sellbird', 'Harvey is now Sellbird':'Harvey agora é Sellbird',
    'Held':'Retido', 'How replies handle pushback':'Como as respostas lidam com objeções',
    'I use another service':'Uso outro serviço', 'IMAP server':'Servidor IMAP',
    'Ideas to start from (click one to put it in the box, then make it yours)':'Sugestões para começar (clique em uma para editar)',
    'Industries':'Setores', 'Industry':'Setor', 'Input':'Entrada', 'Job titles':'Cargos',
    'Key benefits':'Principais benefícios', 'Last run':'Última execução',
    'Leave empty for the default. Warming inboxes start lower on their own.':'Deixe vazio para usar o padrão. Caixas em aquecimento começam com limite menor.',
    'Leave the date empty if this inbox has been sending normally for a while.':'Deixe a data vazia se esta caixa já envia normalmente há algum tempo.',
    'Location':'Localização', 'Mark as sent':'Marcar como enviado',
    'Name':'Nome', 'Next':'Próximo', 'Next →':'Próximo →',
    'No campaigns yet.':'Ainda não há campanhas.',
    'No contacts found at this company yet.':'Ainda não foram encontrados contatos nesta empresa.',
    'No contacts yet. Scout adds them as it finds people.':'Ainda não há contatos. O agente de busca adiciona pessoas conforme as encontra.',
    'No email steps in this campaign.':'Esta campanha ainda não tem etapas de email.',
    'No messages in this thread yet.':'Ainda não há mensagens nesta conversa.',
    'No offer yet':'Ainda não há oferta', 'None. Every campaign has chosen other inboxes.':'Nenhuma. Todas as campanhas usam outras caixas.',
    'Not connected.':'Não conectado.', 'Nothing running right now':'Nada em execução no momento',
    'Objections and answers':'Objeções e respostas', 'Offer':'Oferta', 'Open Settings':'Abrir Configurações',
    'Or from your terminal':'Ou pelo terminal', 'Output':'Saída',
    'Password or app password':'Senha ou senha de aplicativo', 'Pause':'Pausar',
    'Paused:':'Pausado:', 'Phone':'Telefone', 'Pick per campaign':'Escolher por campanha',
    'Prev':'Anterior', '← Prev':'← Anterior', 'Preview an email':'Prévia de um email',
    'Pricing':'Preço', 'Pricing it…':'Calculando o custo…', 'Problems':'Problemas',
    'Product knowledge':'Conhecimento do produto', 'Product or service':'Produto ou serviço',
    'Profile':'Perfil', 'Protect your main address':'Proteja seu endereço principal',
    'Read websites':'Ler sites', 'Remove':'Remover', 'Remove this inbox':'Remover esta caixa',
    'Reopen':'Reabrir', 'Resume sending':'Retomar envios', 'Role':'Cargo',
    'SMTP server':'Servidor SMTP', 'Save offer':'Salvar oferta', 'Score':'Pontuação',
    'Sellbird held this instead of sending it':'O Sellbird reteve esta mensagem antes de enviar',
    'Sellbird is reading your product and coming up with offers that fit it...':'O Sellbird está analisando seu produto e sugerindo ofertas...',
    'Sellbird starts finding prospects and sending once these are done.':'O Sellbird começa a encontrar contatos e enviar emails quando estas etapas forem concluídas.',
    'Sellbird stops sending from it, and threads it started end. Its sign-in stays in your keychain.':'O Sellbird para de enviar por esta caixa e encerra as conversas iniciadas por ela. As credenciais continuam no chaveiro do sistema.',
    'Send cold email from a second domain, so a bad week never touches your everyday mail.':'Envie emails de prospecção por um segundo domínio para proteger sua caixa principal.',
    'Send more each day':'Enviar mais por dia', 'Sender name':'Nome do remetente',
    'Sending is paused':'Os envios estão pausados', 'Setup':'Configuração',
    'Sign in to the mailbox Sellbird sends from.':'Entre na caixa que o Sellbird usará para enviar.',
    'Skip':'Pular', 'Status':'Status', 'Suggest ideas':'Sugerir ideias',
    'Testing…':'Testando…', 'The name people see in From.':'O nome exibido no campo Remetente.',
    'The password goes straight to your system keychain. Sellbird never shows it again.':'A senha é salva no chaveiro do sistema. O Sellbird não a exibe novamente.',
    'Tone':'Tom', 'Turn off':'Desativar', 'Turn off autopilot':'Desativar envio automático',
    'Turn on':'Ativar', 'Turn on autopilot':'Ativar envio automático',
    'Turn on autopilot…':'Ativar envio automático…', 'Undo opt-out':'Reverter descadastro',
    'Use this offer':'Usar esta oferta', 'Username and IMAP (for reading replies)':'Usuário e IMAP (para ler respostas)',
    'Warming up since':'Em aquecimento desde', 'What Sellbird learned from your site':'O que o Sellbird aprendeu no seu site',
    'What changed':'O que mudou', 'What every first email ends by offering':'Oferta ao final de cada primeiro email',
    'What you sell':'O que você vende', 'When they say':'Quando dizem',
    'Where':'Onde', 'Who you sell to':'Para quem você vende', 'Why add another inbox?':'Por que adicionar outra caixa?',
    'Why opted out?':'Motivo do descadastro',
    'Writing a sample first email for one of your prospects. Nothing is saved or sent.':'Criando um exemplo de primeiro email para um contato. Nada será salvo ou enviado.',
    'Your agent proposed':'Seu agente sugeriu', 'Your offer':'Sua oferta',
    'one per line':'um por linha', 'optional':'opcional', 'out':'saída',
    'paused':'pausado', 'ready':'pronto', 'sending':'enviando',
    'signals on':'sinais ativos', 'sites not read yet':'sites ainda não lidos',
    'waiting':'aguardando', 'first emails waiting to go':'primeiros emails aguardando envio',
    'from here on.':'a partir de agora.', 'to turn it on. It starts from Sellbird’s next cycle.':'para ativar. Começará no próximo ciclo do Sellbird.',
    'News and updates on X':'Novidades e atualizações no X',
    'Startup and hiring searches, run by web search (TinyFish, Serper or DataForSEO SERP). YC startups and Accelerator startups: companies whose own site says Y Combinator or another accelerator (Techstars, Antler, Entrepreneur First and others) backed them; turn on YC_BACKED or ACCELERATOR to tag them. Recently funded: companies announcing their own raise in the last 18 months; turn on FUNDING_ROUND to record the round, amount and date. Hiring for your roles: companies whose own careers pages list one of your hiring_signals roles (or ICP titles); turn on HIRING_ROLE and profiling reads the job board their site links to.':'Buscas de startups e vagas por pesquisa na web. Para startups apoiadas por aceleradoras, ative os sinais YC_BACKED ou ACCELERATOR. Para rodadas de investimento, ative FUNDING_ROUND. Para vagas nos cargos de interesse, ative HIRING_ROLE.',
    '· set':'· configure', 'in':'em', 'to gmail, microsoft, smtp or instantly':'como gmail, microsoft, smtp ou instantly',
    'Enter your Instantly API key':'Digite sua chave de API Instantly',
    '"Help me work out my Sellbird offer."':'"Ajude-me a definir minha oferta no Sellbird."',
    '(how they were found, not a fact about them)':'(como foram encontrados, não um fato sobre eles)',
    ', create an OAuth client ID of type':', crie um ID de cliente OAuth do tipo',
    ', then find businesses on the':', e depois encontre empresas na aba',
    'Email':'Email', 'Loading cohort…':'Carregando segmento…',
    'Running…':'Em execução…', 'cached':'em cache', 'calls':'chamadas',
    'command still works for now; use':'ainda funciona; prefira',
    'companies':'empresas', 'get a key':'obter uma chave',
    'needs a key':'precisa de uma chave', 'signed under every email':'assinado em todos os emails',
    '1. Sign up at ':'1. Cadastre-se em ',
    '(you need the Growth plan for API access)':'(é necessário o plano Growth para acessar a API)',
    '2. Go to Settings > Integrations':'2. Acesse Configurações > Integrações',
    '3. Copy your API key':'3. Copie sua chave de API',
    '4. Paste it in the Settings tab here':'4. Cole a chave na aba Configurações',
    'If you want Sellbird to find prospects on LinkedIn, enter your LinkedIn email and password. Sellbird uses a real browser to search LinkedIn like a human would, with random delays and rate limits to avoid detection.':'Se quiser buscar contatos no LinkedIn, informe seu email e sua senha do LinkedIn. O Sellbird faz buscas pelo navegador, com intervalos e limites de acesso.',
    'If you skip this, Sellbird will find prospects through Google searches and company website scraping instead.':'Se você pular esta etapa, o Sellbird buscará contatos pelo Google e pelos sites das empresas.',
    "This is only used during product training (when Sellbird crawls your website to learn about your product). It handles JavaScript-heavy websites that a basic crawler can't read.":'Este recurso é usado apenas no treinamento do produto, quando o Sellbird lê seu site. Ele permite acessar páginas que dependem de JavaScript.',
    '(paid Workers plan, ~$5/month)':'(plano Workers pago, cerca de US$ 5 por mês)',
    '2. Go to Workers & Pages > Browser Rendering':'2. Acesse Workers e Pages > Browser Rendering',
    '3. Create an API token with Browser Rendering Edit permissions':'3. Crie um token de API com permissão de edição do Browser Rendering',
    '4. Enter your Account ID and API Token in the Settings tab':'4. Informe o ID da conta e o token de API na aba Configurações',
    "Without this, Sellbird uses a built-in crawler that works fine for most websites but can't render JavaScript.":'Sem este serviço, o Sellbird usa seu leitor de sites integrado, que funciona para a maioria das páginas, mas não renderiza JavaScript.',
    "Your API key is wrong, or you need the Growth plan (the free plan doesn't include API access). Double-check the key in Settings > Integrations in your Instantly dashboard.":'A chave de API está incorreta ou sua conta precisa do plano Growth (o plano gratuito não oferece acesso à API). Confira a chave em Configurações > Integrações no Instantly.',
    "Make sure you've run ":'Confirme que você executou ',
    'in your terminal and have an active Claude Max subscription. Sellbird uses your existing subscription, not a separate API key.':'no terminal e tem uma assinatura Claude Max ativa. O Sellbird usa sua assinatura existente, sem uma chave de API separada.',
    "Check that your ICP (ideal customer profile) in sellbird.yaml has realistic titles, industries, and geography. If LinkedIn is set up, check that the credentials are correct. Check the Activity tab to see what Sellbird has been trying to do.":'Verifique se o perfil de cliente ideal em sellbird.yaml inclui cargos, setores e regiões realistas. Se o LinkedIn estiver configurado, confira as credenciais. Consulte a aba Atividade para ver as tentativas de busca.',
    'With ':'Com ', ', set ':', defina ', 'to an available model ID, including Luna, Sol, or Terra (for example':'como um ID de modelo disponível, como Luna, Sol ou Terra (por exemplo',
    '), or leave it blank to select a listed model. Sellbird runs these models without tools;':'), ou deixe em branco para escolher um modelo da lista. O Sellbird executa esses modelos sem ferramentas;',
    'also remains supported when present in your account\'s catalog. Run':'também continua disponível quando aparece no catálogo da sua conta. Execute',
    'and choose "Sign in with ChatGPT" (API-key logins are refused). Sellbird never renews your Codex login: if the log says it has expired or is due for renewal, use Codex once or run':'e escolha "Entrar com ChatGPT" (o acesso com chave de API não é aceito). O Sellbird não renova sua sessão do Codex: se o registro indicar expiração, use o Codex ou execute',
    '. Sellbird needs Codex CLI 0.159.3 on macOS or Linux (Codex isn\'t supported on Windows; use Claude there) and refuses other versions. While Codex can\'t be used, Sellbird pauses (Today shows "Codex is paused" and why), leaves replies and queued emails untouched, and resumes once it\'s fixed;':'. O Sellbird precisa do Codex CLI 0.159.3 no macOS ou Linux (no Windows, use o Claude) e não aceita outras versões. Se o Codex estiver indisponível, o Sellbird pausa e retoma após a correção;',
    'checks on demand. If the log says isolation could not be verified, a Codex config layer is forcing a tool, hook, MCP server or custom endpoint back on — Sellbird refuses to send prompts until it is removed. Sellbird never falls back to Claude on its own.':'verifica o estado quando solicitado. Se o registro indicar que o isolamento não pôde ser confirmado, alguma configuração está ativando uma ferramenta, hook, servidor MCP ou endpoint personalizado. O Sellbird espera a remoção dessa configuração antes de enviar prompts.',
    'Discovery — who exists':'Descoberta — quais empresas existem',
    'Profile — what they are':'Perfil — como são as empresas',
    'People — who decides':'Pessoas — quem decide',
    'Contactability — can you reach them':'Contato — é possível falar com elas',
    'How Sellbird finds businesses at all, and how visible they are. This is the only stage that costs money.':'Como o Sellbird encontra empresas e avalia sua presença. Esta é a única etapa com custo.',
    'Read from the pages a business already publishes. Free, no AI tokens, three HTTP requests per company. These are the signals that make an email specific.':'Informações dos sites das empresas. É grátis, sem consumo de tokens de IA, com três requisições por empresa. Esses sinais tornam os emails específicos.',
    "Named humans and whether they're the one who can say yes.":'Pessoas identificadas e seu poder de decisão.',
    "Whether the address will actually deliver, and what to do when it won't.":'Se o endereço recebe emails e o que fazer caso não receba.',
    'Wait — Sellbird is working. This page updates by itself.':'Aguarde — o Sellbird está trabalhando. Esta página se atualiza automaticamente.',
    'Wait — emails are being found.':'Aguarde — os emails estão sendo encontrados.',
    'A job stopped before finishing. Run it again.':'Uma tarefa parou antes de terminar. Execute novamente.',
    'Search for businesses to get started.':'Busque empresas para começar.',
    'Search more cities or industries to get more leads.':'Busque outras cidades ou setores para encontrar mais contatos.',
    'Open the log':'Abrir registro', 'Review and resume':'Revisar e retomar',
    'Open setup':'Abrir configuração', 'Review signals':'Revisar sinais',
    'Find businesses':'Buscar empresas', 'Read their sites':'Ler os sites',
    'Read them':'Ler conversas', 'Open the decisions desk':'Abrir caixa de saída',
    'Read conversations':'Ler conversas', 'No signals confirmed':'Nenhum sinal confirmado',
    'No companies yet':'Ainda não há empresas', 'Finish setting Sellbird up':'Conclua a configuração do Sellbird',
    "Sellbird isn't writing emails: your email rules can't be used":'O Sellbird não está escrevendo emails: não foi possível usar suas regras de email',
    '. Nothing will go out until you resume it.':'. Nenhum email será enviado até você retomar os envios.',
    'Some required steps are incomplete.':'Algumas etapas obrigatórias estão incompletas.',
    "Sellbird won't collect anything you haven't approved. Confirm which signals define a good prospect for you.":'O Sellbird só coleta o que você aprovar. Confirme os sinais que definem um bom cliente potencial.',
    'Every signal is rejected, so prospecting has nothing to collect.':'Todos os sinais foram rejeitados, então não há o que coletar.',
    'Signals are confirmed but nothing has been collected. Discovery is free to try — no account needed.':'Os sinais foram confirmados, mas nenhuma empresa foi coletada. Você pode testar a descoberta gratuitamente, sem criar uma conta.',
    'Reading their websites is free and it is what makes an email specific — who their agency is, what they are missing, whether they are spending on ads.':'Ler os sites das empresas é grátis e permite personalizar os emails com dados específicos.',
    'Sellbird stopped and handed these over: an escalation, or a reply it had no safe answer for. Reply yourself, then close it or hand it back.':'O Sellbird encaminhou estas conversas porque precisam da sua resposta. Responda e depois encerre ou devolva ao agente.',
    'Nothing sends until you approve it. Read them one at a time.':'Nada será enviado sem sua aprovação. Leia cada email antes de decidir.',
    'Autopilot sends the rest on its own; these wait for you. Read them one at a time.':'O envio automático cuida dos demais; estes aguardam sua decisão. Leia cada email antes de decidir.',
    'People replied. Check how Sellbird is handling them.':'Há respostas recebidas. Veja como o Sellbird está lidando com elas.',
  };
  // Additional UI copy, including setup checks returned by the backend.
  // Keep internal state values, customer-authored content, email bodies and commands untranslated.
  const extraCopy = {
    'Language':'Idioma',
    'Choose the language used in the dashboard. This setting is saved in your browser.':'Escolha o idioma do painel. Esta preferência fica salva no navegador.',
    'Python virtual environment':'Ambiente virtual Python',
    'Environment file (.env)':'Arquivo de ambiente (.env)',
    'Email provider configured (gmail)':'Provedor de email configurado (Gmail)',
    'Email provider configured (microsoft)':'Provedor de email configurado (Microsoft)',
    'Email provider configured (smtp)':'Provedor de email configurado (SMTP)',
    'Email provider configured (instantly)':'Provedor de email configurado (Instantly)',
    'Email verification key':'Chave de verificação de email',
    'Sellbird configured (sellbird.local.yaml)':'Sellbird configurado (sellbird.local.yaml)',
    'Product knowledge trained':'Conhecimento do produto treinado',
    'Warm up your mailbox':'Aqueça sua caixa de email',
    'Add your Google OAuth client ID and secret in Settings, then sign in on the Inboxes tab (or run \'sellbird gmail auth\').':'Adicione o ID e o segredo do cliente OAuth do Google em Configurações e entre na aba Caixas de entrada (ou execute \'sellbird gmail auth\').',
    'A new mailbox needs 2–4 weeks of warmup before cold email, and warmup keeps it out of spam after that. We recommend TrulyInbox: connect it and Sellbird shows whether your mailbox is warmed.':'Uma nova caixa de email precisa de 2 a 4 semanas de aquecimento antes da prospecção. Recomendamos conectar o TrulyInbox para acompanhar o aquecimento e reduzir o risco de spam.',
    'A new mailbox needs 2-4 weeks of warmup before cold email, and warmup keeps it out of spam after that. We recommend TrulyInbox: connect it and Sellbird shows whether your mailbox is warmed.':'Uma nova caixa de email precisa de 2 a 4 semanas de aquecimento antes da prospecção. Recomendamos conectar o TrulyInbox para acompanhar o aquecimento e reduzir o risco de spam.',
    'Sellbird starts finding prospects and sending once these are done.':'O Sellbird começa a encontrar contatos e enviar emails quando estas etapas forem concluídas.',
    'Contacts found':'Contatos encontrados',
    'Emails sent':'Emails enviados',
    'Contacts found per day, last 14 days':'Contatos encontrados por dia, últimos 14 dias',
    'Emails sent per day, last 14 days':'Emails enviados por dia, últimos 14 dias',
    'New replies per day, last 14 days':'Novas respostas por dia, últimos 14 dias',
    'Waiting on you':'Aguardando você',
    'last 14 days ·':'últimos 14 dias ·',
    'this week':'esta semana',
    'nothing to approve':'nada para aprovar',
    'scheduled':'agendados',
    'new in 14 days':'novas em 14 dias',
    'to approve':'para aprovar',
    'handed to you':'encaminhados para você',
    'optional':'opcional',
    'companies':'empresas',
    'sites not read yet':'sites ainda não analisados',
    'signals on':'sinais ativos',
    'just now':'agora mesmo',
    'No contacts yet. Scout adds them as it finds people.':'Ainda não há contatos. O agente de busca os adiciona conforme os encontra.',
    "Couldn't read the pipeline.":'Não foi possível consultar o funil.',
    'To write':'Para escrever',
    'Ready to meet':'Pronto para reunião',
    'Closed out':'Encerrado',
    'Nothing yet. Every action Sellbird takes shows up here.':'Ainda não há atividades. Todas as ações do Sellbird aparecem aqui.',
    'Instantly tracks sends':'O Instantly acompanha os envios',
    'No activity yet':'Ainda não há atividades',
    'Add your Google OAuth client ID and secret in Settings':'Adicione o ID e o segredo do cliente OAuth do Google em Configurações',
    'No prospecting yet':'Ainda não há prospecção',
    'Main mailbox connected':'Caixa principal conectada',
    'Open Settings':'Abrir Configurações',
    'Opening the sign-in...':'Abrindo a autenticação...',
    'That didn\'t work.':'Não foi possível concluir a operação.',
    'The sign-in didn\'t finish.':'A autenticação não foi concluída.',
    'Connect':'Conectar',
    'Get TrulyInbox':'Obter TrulyInbox',
    'I use another service':'Uso outro serviço',
    'What changed':'O que mudou',
    'Finish setting up Sellbird':'Conclua a configuração do Sellbird',
  };
  // Expanded audit of every dashboard section. UI copy only; external data stays intact.
  const auditCopy = {
  "Turned off": "Desativado",
  "Turn on": "Ativar",
  "Turn off": "Desativar",
  "Cost unknown": "Custo desconhecido",
  "cost unknown": "custo desconhecido",
  "only recorded above": "registrado apenas acima de",
  "confidence": "de confiança",
  "seen on": "identificado em",
  "so far": "até agora",
  "Confirm all": "Confirmar todos",
  "Skip all": "Ignorar todos",
  "Confirm": "Confirmar",
  "Skip": "Ignorar",
  "The dashboard process may have stopped. Restart it with": "O painel pode ter parado. Reinicie-o com",
  "Dashboard can't reach the server": "O painel não consegue acessar o servidor",
  "and refresh this page.": "e atualize esta página.",
  "No matches": "Nenhum resultado",
  "Nothing matches that search and filter.": "Nenhum contato corresponde à pesquisa e ao filtro.",
  "Score": "Pontuação",
  "Status": "Status",
  "Source": "Fonte",
  "Added": "Adicionado",
  "Phone verified": "Telefone verificado",
  "Fit": "Compatibilidade",
  "Industry": "Setor",
  "Location": "Localização",
  "Contact": "Contato",
  "Page": "Página",
  "Prev": "Anterior",
  "Next": "Próximo",
  "Next →": "Próximo →",
  "Why selected": "Por que foi selecionada",
  "People named on site": "Pessoas mencionadas no site",
  "Contact form": "Formulário de contato",
  "Tech on website": "Tecnologias do site",
  "Other signals": "Outros sinais",
  "Found via": "Encontrado por",
  "First found": "Primeira identificação",
  "search result": "resultado da busca",
  "Website": "Site",
  "Sector": "Setor",
  "Area": "Região",
  "Registered": "Cadastrado",
  "Fit score": "Pontuação de compatibilidade",
  "Campaign": "Campanha",
  "Campaign name": "Nome da campanha",
  "Sequence": "Sequência",
  "Step": "Etapa",
  "Subject": "Assunto",
  "Sends": "Envios",
  "Approved & scheduled": "Aprovados e agendados",
  "Approved &amp; scheduled": "Aprovados e agendados",
  "To": "Para",
  "From": "De",
  "Time": "Horário",
  "Date": "Data",
  "Message": "Mensagem",
  "Review": "Revisar",
  "First email": "Primeiro email",
  "Follow-up": "Acompanhamento",
  "Untitled Campaign": "Campanha sem nome",
  "Open in Gmail": "Abrir no Gmail",
  "I already emailed": "Já enviei um email",
  "Mark as sent": "Marcar como enviado",
  "days after the last": "dias após o último",
  "Outreach": "Prospecção",
  "Qualifying": "Qualificação",
  "Presenting": "Apresentação",
  "Negotiating": "Negociação",
  "The Writer agent hasn't drafted any sequences. It kicks in automatically once Sellbird has scored prospects to write for.": "O agente de redação ainda não criou sequências. Ele começa automaticamente após avaliar a compatibilidade dos contatos.",
  "Sellbird won't send follow-ups to people you emailed yourself.": "O Sellbird não enviará acompanhamentos para contatos que você abordou manualmente.",
  "Anything Sellbird should know before writing to this person?": "Algo que o Sellbird precisa saber antes de escrever para este contato?",
  "What should Sellbird do differently in the emails it writes next? (e.g. \"shorter; don't mention reviews\")": "O que o Sellbird deve mudar nos próximos emails? (Ex.: mais curtos; não mencionar avaliações.)",
  "No contacts yet": "Ainda não há contatos",
  "Sellbird hasn't found any prospects. Once it's running, the Scout agent searches the web for people matching your ideal customer profile in": "O Sellbird ainda não encontrou contatos. Quando estiver em execução, o agente de busca procurará na web pessoas compatíveis com seu cliente ideal em",
  "Why?": "Por quê?",
  "Opt-out history": "Histórico de descadastro",
  "What made Sellbird stop emailing them": "O que levou o Sellbird a parar de enviar emails",
  "Leave feedback on this contact": "Enviar avaliação sobre este contato",
  "Why Sellbird stopped emailing": "Por que o Sellbird parou de enviar emails para",
  "Opt-out history for": "Histórico de descadastro de",
  "They opted out before Sellbird kept a record of why.": "O contato se descadastrou antes de o Sellbird registrar o motivo.",
  "The last thing they wrote:": "A última mensagem foi:",
  "There's no reply from them on file.": "Não há respostas registradas desse contato.",
  "Their reply was only an opt-out word": "A resposta continha apenas uma palavra de descadastro",
  "The model’s judgement (no phrase matched)": "Avaliação do modelo (nenhuma expressão identificada)",
  "Matched an opt-out phrase": "Identificada uma expressão de descadastro",
  "Matched “no thanks”": "Identificada a expressão «não, obrigado»",
  "Read websites": "Analisar sites",
  "Busy…": "Ocupado…",
  "Starting…": "Iniciando…",
  "Every site is already read.": "Todos os sites já foram analisados.",
  "Could not start.": "Não foi possível iniciar.",
  "Could not estimate.": "Não foi possível estimar o custo.",
  "Could not stop.": "Não foi possível parar.",
  "Pricing it…": "Calculando custo…",
  "Finished reading websites.": "Análise dos sites concluída.",
  "Discovery finished.": "Busca concluída.",
  "Discovery started —": "Busca iniciada —",
  "Websites read": "Sites analisados",
  "Facts recorded": "Informações registradas",
  "New companies": "Novas empresas",
  "Already known": "Já conhecidas",
  "Observations": "Observações",
  "Filtered as junk": "Descartadas por baixa qualidade",
  "Actual cost": "Custo real",
  "Stopped early:": "Interrompido antes de concluir:",
  "Problems": "Problemas",
  "Over cap": "Acima do limite",
  "Run — free": "Executar — grátis",
  "Run — spend up to $": "Executar — gastar até US$ ",
  "Over your cap. Raise the cap or narrow the search.": "Acima do limite de gastos. Aumente o limite ou reduza a pesquisa.",
  "cap is $": "limite de US$ ",
  "more": "a mais",
  "… and": "… e",
  "in .env ·": "no .env ·",
  "get a key": "obter uma chave",
  "Setup": "Configuração",
  "Read their sites": "Analisar sites",
  "Confirm some signals above and they become the building blocks here.": "Confirme alguns sinais acima para poder usá-los como critérios.",
  "In range": "Dentro do intervalo",
  "to": "até",
  "disqualifiers": "critérios de exclusão",
  "every company in the cohort carries all of these": "todas as empresas do segmento atendem a estes critérios",
  "e.g. organic rank 11 to 30; leave a side blank for no limit": "ex.: posição orgânica de 11 a 30; deixe um campo vazio para não limitar",
  "No company carries all of those yet. Either loosen the cohort, or run": "Nenhuma empresa atende a todos os critérios. Reduza os filtros ou execute",
  "prospecting to collect more.": "a prospecção para encontrar mais.",
  "company matches": "empresa corresponde",
  "companies match": "empresas correspondem",
  "this cohort right now": "a este segmento agora",
  "Showing": "Exibindo",
  "Free, no account needed. Sellbird reads each site for": "Grátis e sem necessidade de conta. O Sellbird analisa os sites para identificar",
  "who their agency is, what they are missing, and whether they run ads. Up to 200 per run.": "qual agência os atende, possíveis lacunas e se fazem anúncios. Até 200 por execução.",
  "Sellbird is working through the": "O Sellbird está processando as",
  "queries. Results land in Companies, and the run log is on Today.": "consultas. Os resultados aparecem em Empresas e o registro da execução fica em Hoje.",
  "in .env": "no .env",
  "ready": "pronto",
  "needs a key": "precisa de uma chave",
  "Not connected": "Não conectado",
  "Connected": "Conectado",
  "Approval mode": "Modo de aprovação",
  "Sending mode:": "Modo de envio:",
  "Approved": "Aprovado",
  "Autopilot": "Envio automático",
  "Every email Sellbird writes waits here until you approve it.": "Cada email criado pelo Sellbird fica aguardando sua aprovação antes do envio.",
  "Instantly can’t hold single emails, so campaigns aren’t sent to Instantly until you turn on autopilot.": "O Instantly não permite reter emails individuais; as campanhas não serão enviadas até você ativar o envio automático.",
  "Auto-send": "Envio automático",
  "Safe mode": "Modo seguro",
  "Approval (the default): every email Sellbird writes, first emails, follow-ups and replies,": "Aprovação (padrão): cada email do Sellbird, incluindo o primeiro contato, acompanhamentos e respostas,",
  "waits in the Outbox until you approve it.": "aguarda na Caixa de saída até você aprovar.",
  "On Instantly, which can’t hold single emails, that means campaigns aren’t deployed.": "No Instantly, que não retém emails individuais, isso significa que as campanhas não são ativadas.",
  "Sellbird sends email on its own. It holds anything that links to a site that isn’t yours or": "O Sellbird envia emails automaticamente. Ele retém mensagens com links para sites que não são seus ou",
  "quotes its own instructions; those wait here": "que reproduzam suas próprias instruções; essas mensagens aguardam aqui",
  "Opt-outs, bounces and Pause all sending work the same. It still holds an email for you when it links": "Descadastros, devoluções e Pausar todos os envios continuam funcionando. Um email será retido se contiver link",
  "to, or gives an address at, a site that isn’t yours, or quotes Sellbird’s own instructions: text from": "ou endereço de um site que não é seu, ou reproduzir instruções internas do Sellbird: textos de",
  "websites and replies can try to steer what it writes. The first reply after you undo an opt-out waits too.": "sites e respostas podem tentar influenciar a redação. A primeira resposta após reverter um descadastro também fica retida.",
  "Counted as yours:": "Considerados seus:",
  "your booking page": "sua página de agendamento",
  "Turning it off works at once: emails autopilot": "A desativação é imediata: emails que o envio automático",
  "approved that haven’t gone out come back to the Outbox.": "aprovou e ainda não enviou voltam para a Caixa de saída.",
  "Campaigns already on Instantly keep running until you pause them there.": "Campanhas já em execução no Instantly continuam até você pausá-las lá.",
  "Approve a batch or two by hand first": "Aprove manualmente alguns lotes antes",
  "and read what Sellbird writes. Type": "e confira os textos do Sellbird. Digite",
  "Autopilot is on from Sellbird’s next cycle. Held emails still wait for you.": "O envio automático será ativado no próximo ciclo do Sellbird. Emails retidos ainda aguardam sua aprovação.",
  "Autopilot is off. Every email waits for you": "Envio automático desativado. Todos os emails aguardam sua aprovação",
  "Campaigns already on Instantly keep running: pause them in Instantly.": "Campanhas em execução no Instantly continuam ativas: pause-as no Instantly.",
  "Couldn’t change the sending mode.": "Não foi possível mudar o modo de envio.",
  "Sending paused.": "Envio pausado.",
  "Sending resumed.": "Envio retomado.",
  "Could not pause sending.": "Não foi possível pausar os envios.",
  "Could not resume sending.": "Não foi possível retomar os envios.",
  "Paused all sending": "Todos os envios pausados",
  "Save": "Salvar",
  "Saving…": "Salvando…",
  "Saved": "Salvo",
  "Saved. Now sign in on the Inboxes tab.": "Salvo. Agora faça login na aba Caixas de entrada.",
  "SMTP settings saved.": "Configurações SMTP salvas.",
  "Instantly API key saved.": "Chave de API do Instantly salva.",
  "Enter a new key first. The saved one is kept.": "Digite uma nova chave. A chave salva será mantida.",
  "TrulyInbox connected": "TrulyInbox conectado",
  "Could not connect TrulyInbox": "Não foi possível conectar o TrulyInbox",
  "Main mailbox": "Caixa principal",
  "Add inbox": "Adicionar caixa de email",
  "Sign in with": "Entrar com",
  "Sign in as": "Entrar como",
  "Not connected. Sign in to the mailbox Sellbird sends from.": "Não conectado. Entre na caixa de email usada pelo Sellbird para enviar mensagens.",
  "Open Settings": "Abrir Configurações",
  "Sender name (optional)": "Nome do remetente (opcional)",
  "Warming up since (optional)": "Em aquecimento desde (opcional)",
  "Sender name": "Nome do remetente",
  "Connect an inbox you already own. Sellbird sends from it and reads its replies.": "Conecte uma caixa de email sua. O Sellbird enviará emails por ela e lerá suas respostas.",
  "Sending through several of your own inboxes works with Gmail, Microsoft 365 or SMTP.": "O envio por várias caixas funciona com Gmail, Microsoft 365 e SMTP.",
  "Set channels.email.provider in sellbird.yaml to one of those to use it.": "Defina channels.email.provider no sellbird.yaml como uma dessas opções.",
  "cold emails sent today": "emails de prospecção enviados hoje",
  "Each inbox sends up to": "Cada caixa envia até",
  "cold emails a day. Two inboxes, twice as many, all under your daily total of": "emails de prospecção por dia. Com duas caixas, a capacidade dobra, respeitando seu limite diário de",
  "Campaigns that haven't chosen inboxes send from all of them.": "Campanhas sem caixas selecionadas enviam por todas as disponíveis.",
  "Sellbird can't sign in to it from this computer. Check the connection to see why, or remove it and add it again.": "O Sellbird não consegue entrar nesta caixa por este computador. Verifique a conexão ou remova e adicione novamente.",
  "Your main mailbox comes from sellbird.yaml:": "Sua caixa principal é configurada no sellbird.yaml:",
  "all sending, on the Outbox tab.": "todos os envios, na aba Caixa de saída.",
  "Inbox paused": "Caixa pausada",
  "Inbox sends again": "Envios da caixa retomados",
  "Cap saved": "Limite salvo",
  "Name saved": "Nome salvo",
  "Inbox removed": "Caixa removida",
  "Checking the connection...": "Verificando a conexão...",
  "Couldn’t check it.": "Não foi possível verificar.",
  "It's connected, but the check failed:": "Está conectada, mas a verificação falhou:",
  "The sign-in didn't finish.": "O login não foi concluído.",
  "Sign in as your sending address and allow access. This page updates when you're done.": "Entre com o endereço usado para envio e autorize o acesso. Esta página será atualizada ao concluir.",
  "You closed a conversation": "Você encerrou uma conversa",
  "You handed a conversation back to Sellbird": "Você devolveu uma conversa ao Sellbird",
  "You reopened a conversation": "Você reabriu uma conversa",
  "You edited a draft": "Você editou um rascunho",
  "You undid a hand-sent mark": "Você desfez a marcação de envio manual",
  "You marked a contact as emailed by hand": "Você marcou um contato como abordado manualmente",
  "Sellbird hasn't taken any actions. Every prospect found, email written, and reply handled will appear here the moment it happens.": "O Sellbird ainda não realizou ações. Contatos encontrados, emails escritos e respostas tratadas aparecerão aqui.",
  "Heartbeat:": "Ciclo de execução:",
  "Wrote": "Escreveu",
  "Sent email": "Enviou email",
  "No recent activity": "Nenhuma atividade recente",
  "Team page": "Página da equipe",
  "Published address": "Endereço publicado",
  "Job board": "Página de vagas",
  "Web search": "Pesquisa na web",
  "Company inbox": "Caixa da empresa",
  "Signal confirmed": "Sinal confirmado",
  "none yet": "ainda nenhuma",
  "Never": "Nunca",
  "View": "Visualizar",
  "Details": "Detalhes",
  "Last run": "Última execução"
};
  const signalCatalogPt = {
  "SERP_RANK": {
    "label": "Posição no Google (busca orgânica)",
    "description": "Posição da empresa na busca orgânica por serviço e cidade. As posições 11–30 costumam indicar oportunidades: a empresa já aparece, mas ainda pode melhorar. A posição depende da localização de quem pesquisa."
  },
  "IN_LOCAL_PACK": {
    "label": "Entre os 3 primeiros resultados locais",
    "description": "Indica se a empresa aparece entre as três posições do mapa exibido nos resultados locais do Google, sem contar anúncios."
  },
  "MAPS_RANK": {
    "label": "Posição no Google Maps",
    "description": "Posição da empresa nos resultados do Google Maps para um serviço e uma cidade, pesquisando a partir do centro da cidade."
  },
  "FOUND_IN_SERP": {
    "label": "Encontrada por pesquisa",
    "description": "A empresa apareceu em uma pesquisa do mercado-alvo, indicando como o Sellbird a encontrou."
  },
  "NO_WEBSITE": {
    "label": "Empresa sem site",
    "description": "A empresa possui cadastro e telefone, mas não tem site. É um sinal útil para quem oferece criação de sites."
  },
  "UNCLAIMED_LISTING": {
    "label": "Perfil da Empresa no Google não reivindicado",
    "description": "Ninguém assumiu a administração do Perfil da Empresa no Google; pode indicar oportunidade de marketing local."
  },
  "REVIEW_RATING": {
    "label": "Nota das avaliações",
    "description": "Média de estrelas da empresa. Notas baixas podem indicar problemas de reputação; notas altas com poucas avaliações podem indicar baixa visibilidade."
  },
  "REVIEW_COUNT": {
    "label": "Quantidade de avaliações",
    "description": "Total de avaliações recebidas. Pode indicar o porte e a atenção à presença digital."
  },
  "INCUMBENT_AGENCY": {
    "label": "Possui agência de marketing ou web",
    "description": "Identifica a agência citada no rodapé do site, quando houver atribuição explícita. Ajuda a entender se a empresa já tem fornecedor."
  },
  "RUNNING_GOOGLE_ADS": {
    "label": "Anuncia no Google Ads",
    "description": "Presença de tag do Google Ads no site, um indício de investimento em aquisição de clientes."
  },
  "RUNNING_META_ADS": {
    "label": "Anuncia no Meta Ads",
    "description": "Presença do Meta Pixel no site, possível indício de investimento em anúncios nas redes sociais."
  },
  "TECH_STACK": {
    "label": "Plataforma e ferramentas do site",
    "description": "Tecnologias usadas pelo site, como WordPress, Shopify, HubSpot, ferramentas de chat e agendamento."
  },
  "NO_SCHEMA_MARKUP": {
    "label": "Sem dados estruturados",
    "description": "Não foi identificado Schema JSON-LD no site, uma oportunidade verificável de SEO."
  },
  "NO_ONLINE_BOOKING": {
    "label": "Sem agendamento online",
    "description": "Nenhuma ferramenta de agendamento foi identificada; contatos fora do horário comercial podem ser perdidos."
  },
  "SITE_PAGE_COUNT": {
    "label": "Quantidade de páginas do site",
    "description": "Quantidade de páginas encontradas no sitemap.xml. Pode indicar o tamanho e a manutenção do site."
  },
  "BLOG_STALE": {
    "label": "Conteúdo desatualizado",
    "description": "Não foram encontrados conteúdos recentes no site; pode indicar que o marketing de conteúdo foi interrompido."
  },
  "BLOCKS_AI_CRAWLERS": {
    "label": "Bloqueia rastreadores de IA",
    "description": "O arquivo robots.txt bloqueia robôs de IA, o que pode reduzir a presença em mecanismos de busca baseados em IA."
  },
  "YC_BACKED": {
    "label": "Apoiada pela Y Combinator",
    "description": "O site da empresa informa que ela participou da Y Combinator, com menção à turma, selo ou página da aceleradora."
  },
  "ACCELERATOR": {
    "label": "Participou de aceleradora",
    "description": "O site informa que a empresa participou de um programa de aceleração, como Techstars, Antler ou similares."
  },
  "FUNDING_ROUND": {
    "label": "Anunciou rodada de investimento",
    "description": "A empresa anunciou captação de recursos em seu site, com rodada, valor e data quando disponíveis."
  },
  "HIRING_ROLE": {
    "label": "Contratando para cargo relevante",
    "description": "Vaga aberta que corresponde aos cargos definidos para o cliente ideal, identificada no site ou na página de carreiras."
  },
  "OPEN_ROLES": {
    "label": "Vagas abertas na empresa",
    "description": "Quantidade de oportunidades publicadas nos sistemas de vagas vinculados ao site da empresa."
  },
  "CONTACT_FOUND": {
    "label": "Contato identificado pelo nome",
    "description": "Pessoa citada na página da equipe ou sobre a empresa, com nome e cargo."
  },
  "DECISION_MAKER_TITLE": {
    "label": "Cargo de tomador de decisão",
    "description": "O cargo indica possível poder de decisão, como proprietário, presidente, gestor ou diretor de marketing."
  },
  "REGISTRY_VERIFIED": {
    "label": "Confirmado em registro público",
    "description": "O contato foi identificado em cadastro público oficial ou registro profissional."
  },
  "LIKELY_OWNER": {
    "label": "Provavelmente proprietário",
    "description": "O site indica que a pessoa é proprietária ou fundadora, com evidências do vínculo."
  },
  "EMAIL_PATTERN": {
    "label": "Padrão de email da empresa",
    "description": "Formato dos emails do domínio, como nome.sobrenome@empresa.com."
  },
  "EMAIL_STATUS": {
    "label": "Capacidade de entrega do email",
    "description": "Verifica se o endereço é válido, aceita qualquer destinatário, ainda não foi verificado ou é inválido."
  },
  "CONTACT_FORM_URL": {
    "label": "Formulário de contato disponível",
    "description": "A empresa possui formulário no site, permitindo contato mesmo sem endereço de email validado."
  }
};
  const providerCatalogPt = {
  "dataforseo_listings": {
    "blurb": "Encontra empresas por categoria e região, incluindo telefone, site, avaliações e informação sobre o cadastro no Google. Útil para negócios locais, clínicas e prestadores de serviços.",
    "caveat": "Não fornece endereços de email; o Sellbird procura os contatos em outra etapa."
  },
  "dataforseo_serp": {
    "blurb": "Pesquisa serviços e cidades, registra as posições orgânicas e os três principais resultados locais. Encontra empresas e mede seu posicionamento.",
    "caveat": "A profundidade da busca influencia o custo. Posições dependem da localização de quem pesquisa; os resultados representam a busca a partir do centro da cidade."
  },
  "dataforseo_maps": {
    "blurb": "Pesquisa empresas no Google Maps e registra posição, avaliação, categoria e se o cadastro foi reivindicado, inclusive negócios sem site.",
    "caveat": "A posição no mapa depende muito do local de pesquisa. O Sellbird usa o centro da cidade como referência."
  },
  "serper": {
    "blurb": "Pesquisa rápida no Google com posições nos resultados. Oferece 2.500 consultas gratuitas e requer apenas uma chave de API.",
    "caveat": "Retorna no máximo 10 resultados por consulta, mesmo quando uma profundidade maior é solicitada."
  },
  "tinyfish": {
    "blurb": "Pesquisa gratuita na web com chave de API. Encontra empresas por expressão, mas não registra posição no Google.",
    "caveat": "Exige TINYFISH_API_KEY no .env. O serviço tem limites de uso por minuto e hora; para posições no Google, use Serper ou DataForSEO SERP."
  },
  "osm": {
    "blurb": "Dados públicos gratuitos de mapas. Não exige cadastro, chave ou cartão. Permite testar a prospecção antes de contratar um provedor.",
    "caveat": "A cobertura é limitada para serviços sem endereço físico. É boa para testes e cruzamento de dados, mas não representa um cadastro completo."
  },
  "scavio_maps": {
    "blurb": "Resultados do Google Maps por cidade, incluindo telefone, site, categoria, nota e quantidade de avaliações. Até 120 empresas por busca.",
    "caveat": "O Google Maps não informa se o cadastro foi reivindicado. Usa a mesma chave do Scavio Google Search."
  },
  "scavio_search": {
    "blurb": "Resultados orgânicos do Google com posições. A mesma chave Scavio também permite pesquisar empresas no Google Maps.",
    "caveat": "Os resultados usam o Google em inglês dos EUA, a menos que a busca indique outra localidade. Profundidade de 20 a 30 é um bom equilíbrio."
  }
};
  const entries = new Map(Object.entries({...copy, ...extraCopy, ...auditCopy}).map(([key, value]) => [key.trim(), value.trim()]));
  const attrs = ['placeholder', 'title', 'aria-label'];
  const patterns = [
    [/^(\d+) of (\d+) done$/, (_, done, total) => `${done} de ${total} concluídas`],
    [/^(\d+) optional$/, (_, n) => `${n} ${n === '1' ? 'opcional' : 'opcionais'}`],
    [/^Email provider configured \(([^)]+)\)$/, (_, provider) => `Provedor de email configurado (${provider})`],
    [/^(\d+) new in (\d+) days$/, (_, n, d) => `${n} ${n === '1' ? 'nova' : 'novas'} em ${d} dias`],
    [/^new in (\d+) days$/, (_, d) => `novas em ${d} dias`],
    [/^last (\d+) days ·$/, (_, d) => `últimos ${d} dias ·`],
    [/^last (\d+) days$/, (_, d) => `últimos ${d} dias`],
    [/^(\d+) to approve$/, (_, n) => `${n} para aprovar`],
    [/^(\d+) handed to you$/, (_, n) => `${n} encaminhados para você`],
    [/^(\d+) companies$/, (_, n) => `${n} ${n === '1' ? 'empresa' : 'empresas'}`],
    [/^(\d+) sites not read yet$/, (_, n) => `${n} ${n === '1' ? 'site ainda não analisado' : 'sites ainda não analisados'}`],
    [/^(\d+) signals on$/, (_, n) => `${n} ${n === '1' ? 'sinal ativo' : 'sinais ativos'}`],
    [/^(\d+)m ago$/, (_, n) => `há ${n} min`],
    [/^(\d+)h ago$/, (_, n) => `há ${n} h`],
    [/^in (\d+)m$/, (_, n) => `em ${n} min`],
    [/^in (\d+)h$/, (_, n) => `em ${n} h`],
    [/^Review the (\d+) draft\(s\) waiting in the Outbox\.$/, (_, n) => `Revise os ${n} rascunhos na Caixa de saída.`],
    [/^Open Campaigns and send the (\d+) unsent email\(s\)\.$/, (_, n) => `Abra Campanhas e envie os ${n} emails pendentes.`],
    [/^Find emails for the (\d+) businesses not checked yet\.$/, (_, n) => `Encontre emails das ${n} empresas ainda não verificadas.`],
    [/^Write first emails for (\d+) more contact\(s\)\.$/, (_, n) => `Escreva o primeiro email para mais ${n} contatos.`],
    [/^(\d+) signals? waiting for your confirmation$/, (_, n) => `${n} sinais aguardando sua confirmação`],
    [/^(\d+) companies not looked at yet$/, (_, n) => `${n} empresas ainda não analisadas`],
    [/^(\d+) conversations? (?:needs?|need) you$/, (_, n) => `${n} conversas precisam de você`],
    [/^(\d+) emails? waiting for approval$/, (_, n) => `${n} emails aguardando aprovação`],
    [/^(\d+) live conversations?$/, (_, n) => `${n} conversas ativas`],
  ];
  function translate(value) {
    const trimmed = value.trim();
    const exact = entries.get(trimmed);
    if (exact !== undefined) return exact;
    for (const [pattern, replacement] of patterns) {
      if (pattern.test(trimmed)) return trimmed.replace(pattern, replacement);
    }
    return null;
  }
  // Preserve original English strings to support switching back without a page reload.
  // For DOM nodes rewritten by Sellbird, treat their new value as fresh source text.
  const nodeSources = new WeakMap();
  const attrSources = new WeakMap();
  const SKIP = 'script,style,code,kbd,.log-viewer,textarea,[contenteditable],.desk-body,.tl-text';
  let language = 'pt-BR';
  try {
    language = localStorage.getItem('sellbird-language') === 'en' ? 'en' : 'pt-BR';
  } catch { /* browser may block local storage */ }

  function translatedValue(original) {
    if (language !== 'pt-BR') return original;
    const translation = translate(original);
    if (translation === null) return original;
    return (original.match(/^\s*/)?.[0] || '') + translation +
      (original.match(/\s*$/)?.[0] || '');
  }

  function localize(root) {
    if (root.nodeType === Node.TEXT_NODE) {
      if (root.parentElement?.closest(SKIP)) return;
      const current = root.nodeValue;
      const previous = nodeSources.get(root);
      const original = previous && previous.rendered === current ? previous.original : current;
      const rendered = translatedValue(original);
      nodeSources.set(root, {original, rendered});
      if (rendered !== current) root.nodeValue = rendered;
      return;
    }
    if (root.nodeType !== Node.ELEMENT_NODE || root.matches(SKIP)) return;
    let remembered = attrSources.get(root);
    if (!remembered) { remembered = new Map(); attrSources.set(root, remembered); }
    for (const attr of attrs) {
      const current = root.getAttribute(attr);
      if (current === null) { remembered.delete(attr); continue; }
      const previous = remembered.get(attr);
      const original = previous && previous.rendered === current ? previous.original : current;
      const rendered = translatedValue(original);
      remembered.set(attr, {original, rendered});
      if (rendered !== current) root.setAttribute(attr, rendered);
    }
    for (const child of root.childNodes) localize(child);
  }

  window.sellbirdTranslateUi = (value) => {
    if (language !== 'pt-BR' || typeof value !== 'string') return value;
    return translate(value) ?? value;
  };
  window.sellbirdSignalText = (code, field, fallback) =>
    language === 'pt-BR' ? (signalCatalogPt[code]?.[field] ?? window.sellbirdTranslateUi(fallback)) : fallback;
  window.sellbirdProviderText = (key, field, fallback) =>
    language === 'pt-BR' ? (providerCatalogPt[key]?.[field] ?? window.sellbirdTranslateUi(fallback)) : fallback;
  window.sellbirdGetLanguage = () => language;
  window.sellbirdSetLanguage = (next) => {
    if (next !== 'pt-BR' && next !== 'en') return;
    language = next;
    try { localStorage.setItem('sellbird-language', language); } catch { /* ignore */ }
    document.documentElement.lang = language;
    const selector = document.getElementById('ui-language');
    if (selector) selector.value = language;
    localize(document.body);
    // Re-render dates and API-driven screens using the chosen locale.
    if (typeof window.loadCurrentTab === 'function') window.loadCurrentTab();
  };

  document.documentElement.lang = language;
  const selector = document.getElementById('ui-language');
  if (selector) selector.value = language;
  localize(document.body);
  const observer = new MutationObserver(records => {
    for (const record of records) {
      if (record.type === 'characterData') localize(record.target);
      else if (record.type === 'attributes') localize(record.target);
      else for (const node of record.addedNodes) localize(node);
    }
  });
  observer.observe(document.body, {subtree:true, childList:true, characterData:true, attributes:true, attributeFilter:attrs});
})();
