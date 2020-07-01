<template>
    <aside>
        <section>
            <h1>
                PERFIL
            </h1>

            <p v-html="profile.description"></p>

            <ul class="person">
                <li>
                    <b>Nome:</b>
                    <span v-html="profile.name"></span>
                </li>
                <li>
                    <b>Celular:</b>
                    <span v-html="profile.phone"></span>
                </li>
                <li>
                    <b>E-mail: </b>
                    <span v-html="profile.email"></span>
                </li>
                <li>
                    <b>Localização: </b>
                    <span v-html="profile.location"></span>
                </li>
            </ul>
        </section>

        <section>
            <h1>
                SKILLS - SEGURANÇA DA INFORMAÇÃO
            </h1>

            <ul class="skills-list">
                <li v-for="(skill, index) in skills.security" v-bind:key="index">
                    <span v-html="skill.name"></span>
                    <span class="fill">
                        <i :style="'width:'+skill.score+'%'"></i>
                    </span>
                </li>
            </ul>
        </section>

        <section>
            <h1>
                SKILLS - PROGRAMAÇÃO
            </h1>

            <ul class="skills-list">
                <li v-for="(skill, index) in skills.code" v-bind:key="index">
                    <span v-html="skill.name"></span>
                    <span class="fill">
                        <i :style="'width:'+skill.score+'%'"></i>
                    </span>
                </li>
            </ul>
        </section>

        <section>
            <h1>
                LÍNGUAS
            </h1>

            <ul class="skills-list">
                <li v-for="(language, index) in languages" v-bind:key="index">
                    <span v-html="language.name"></span>
                    <span class="fill">
                        <i :style="'width:'+language.score+'%'"></i>
                    </span>
                </li>
            </ul>
        </section>
        
        <section>
            <h1>
                REDES SOCIAIS
            </h1>

            <ul class="social">
                <li v-for="(social, index) in socials" v-bind:key="index">
                    <img :src="social.svg" width="15.72px" height="15.72px" alt="" />
                    <a :href="social.url" v-html="social.text" target="_blank"></a>
                </li>
            </ul>
        </section>

    </aside>
</template>

<script>
export default {
    name: 'profile',
    data: () => ({
        profile: {
            name: 'Henrique Bissoli Silva',
            phone: '11 97175 1311',
            email: 'emp.shad@gmail.com',
            location: 'São Paulo - SP',
            description: 'Entre minhas especialidades encontram-se dinamismo, responsabilidade, desenvolvimento de software e gestão de segurança da informação, focando em testes de vulnerabilidade.'
        },
        socials: [{
            url: 'https://www.facebook.com/henrique.bissoli.silva',
            text: 'facebook.com/henrique.bissoli.silva',
            title: 'Facebook',
            svg: require('@/assets/images/facebook-icon.svg'),
        },{
            url: 'https://linkedin.com/in/henriquebissoli',
            text: 'linkedin.com/in/henriquebissoli',
            title: 'LinkedIn',
            svg: require('@/assets/images/linkedin-icon.svg'),
        },{
            url: 'https://github.com/Shadowz3n',
            text: 'github.com/Shadowz3n',
            title: 'Github',
            svg: require('@/assets/images/github-icon.svg'),
        }],
        "skills": 
            {
                "security": [{
                    name: 'Sqlmap',
                    score: 98
                },{
                    name: 'Metasploit Framework',
                    score: 98
                },{
                    name: 'Bettercap (MITM)',
                    score: 98
                },{
                    name: 'Ettercap (MITM)',
                    score: 98
                },{
                    name: 'Airmon-ng',
                    score: 95
                },{
                    name: 'THC-Hydra',
                    score: 95
                },{
                    name: 'John the Ripper',
                    score: 95
                },{
                    name: 'WPScan',
                    score: 90
                },{
                    name: 'Joomscan',
                    score: 90
                },{
                    name: 'Nmap',
                    score: 90
                },{
                    name: 'Burp Suite',
                    score: 90
                },{
                    name: 'OllyDbg',
                    score: 75
            },{
                    name: 'Ghidra',
                    score: 75
            }],
            "code": [{
                    name: 'PHP',
                    score: 95,
                },{
                    name: '.NET',
                    score: 95,
                },{
                    name: '.NET Core',
                    score: 95,
                },{
                    name: 'NodeJs',
                    score: 90,
                },{
                    name: 'Python',
                    score: 85,
                },{
                    name: 'C',
                    score: 85,
                },{
                    name: 'C++',
                    score: 85,
                },{
                    name: 'SQL',
                    score: 95,
                },{
                    name: 'Bash',
                    score: 95,
                },{
                    name: 'Javascript',
                    score: 95,
                },{
                    name: 'jQuery',
                    score: 95,
                },{
                    name: 'Vue',
                    score: 90,
                },{
                    name: 'Nativescript',
                    score: 80,
                },{
                    name: 'React',
                    score: 70,
                },{
                    name: 'Angular',
                    score: 70,
                },{
                    name: 'Rust',
                    score: 65,
            }]
        },
        languages: [{
            name: 'Português',
            score: 100,
        },{
            name: 'Inglês',
            score: 75,
        }]
    })
}
</script>

<style scoped lang="scss">
    aside{
        background-color:#f7f9f8;
        width:7cm;
        margin-right:1cm;
        display:flex;
        flex-direction:column;
        max-width:7cm;
        min-width:7cm;
        padding:.52cm;

        section{
            margin-bottom:1cm;

            h1{
                font-family:Raleway,sans-serif;
                font-size:.32cm;
                font-weight:800;
                letter-spacing:.02cm;
                margin:0px 0px .5cm 0px;
            }

            p{
                font-size:.32cm;
                line-height:1.3;
                margin:0px 0px .5cm 0px;
            }

            ul.person{
                list-style:none;
                font-size:.32cm;
                padding:0px;

                li:not(:last-child){
                    border-bottom:1px solid #d3d4d6;
                    margin-bottom:.17cm;
                    padding-bottom:.17cm;

                    b{
                        margin-right:.1cm;
                    }
                } 
            }

            ul.skills-list{
                list-style:none;
                font-size:.32cm;
                margin:0px;
                padding:0px;

                li{
                    margin-bottom:.17cm;
                    display:flex;
                    align-items:center;

                    span{
                        width:50%;

                        &.fill{
                            background-color:#d3d4d6;
                            position:relative;
                            width:50%;
                            height:.17cm;
                            
                            i{
                                background-color:black;
                                display:block;
                                height:.17cm;
                            }
                        }
                    }
                }
            }

            ul.social{
                list-style:none;
                margin:0px;
                padding:0px;
                display:flex;
                flex-direction:column;

                li{
                    display:flex;
                    flex-direction:row;
                    align-items:center;
                    margin-bottom:.28cm;
                    
                    img{
                        width:15.72px;
                        height:15.72px;
                        margin-right:.15cm;
                    }

                    a{
                        color:black;
                        font-size:.32cm;
                        text-decoration:none;
                    }
                }
            }
        }
    }

    @media(max-width: 768px){
        aside{
            margin-right:0px;

            ul.skills-list{
                margin-bottom:.005cm;
            }
        }
    }
</style>