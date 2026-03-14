import { PDFDocument, rgb, degrees } from 'npm:pdf-lib@1.17.1';

Deno.serve(async (req) => {
  if (req.method !== 'GET') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
  }

  try {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([595, 842]); // A4
    const { height } = page.getSize();
    let y = height - 40;
    const margin = 40;
    const lineHeight = 12;

    const drawText = (text, size, bold = false, color = [0, 0, 0]) => {
      page.drawText(text, {
        x: margin,
        y: y - lineHeight,
        size,
        font: bold ? undefined : undefined,
        color: rgb(color[0] / 255, color[1] / 255, color[2] / 255),
      });
      y -= lineHeight + 2;
    };

    const drawSection = (title) => {
      y -= 8;
      page.drawText(title.toUpperCase(), {
        x: margin,
        y,
        size: 11,
        color: rgb(0.345, 0.11, 0.53),
      });
      y -= 2;
      page.drawLine({
        start: { x: margin, y },
        end: { x: 555, y },
        color: rgb(0.345, 0.11, 0.53),
        thickness: 1,
      });
      y -= 10;
    };

    // Header
    page.drawText('JACQUES WEN', {
      x: margin,
      y,
      size: 22,
      color: rgb(0.345, 0.11, 0.53),
    });
    y -= 24;

    page.drawText('Game Developer | Développeur de Jeux Vidéo', {
      x: margin,
      y,
      size: 10,
    });
    y -= 12;

    page.drawText('France / Canada | github.com/Multislache | linkedin.com/in/jacques-wen-43ba32164', {
      x: margin,
      y,
      size: 9,
    });
    y -= 14;

    // Profile
    drawSection('Profil');
    page.drawText(
      'Développeur Unreal Engine avec expertise complète de l\'écosystème. Double diplôme IUT Orsay (BUT',
      { x: margin, y, size: 10, maxWidth: 500 }
    );
    page.drawText(
      'Informatique) + UQAC (Baccalauréat Game Dev). Base très solide : architecture moteurs, optimisation,',
      { x: margin, y: y - 12, size: 10, maxWidth: 500 }
    );
    page.drawText(
      'gameplay systems, mathématiques appliquées. Formation polyvalente : full stack, data, cybersécurité, réseaux.',
      { x: margin, y: y - 24, size: 10, maxWidth: 500 }
    );
    y -= 36;

    // Education
    drawSection('Formation');
    
    page.drawText('UQAC - Université du Québec à Chicoutimi', { x: margin, y, size: 10 });
    y -= 12;
    page.drawText('Baccalauréat en Développement de Jeux Vidéo | 2025-2027', { x: margin, y, size: 9 });
    y -= 12;
    page.drawText('• Expertise : Unreal Engine architecture, systèmes de gameplay, optimisation, multithreading, mathématiques moteurs', { x: margin + 5, y, size: 9 });
    y -= 12;

    page.drawText('IUT d\'Orsay - Université Paris-Saclay', { x: margin, y, size: 10 });
    y -= 12;
    page.drawText('BUT Informatique - Parcours A | 2023-2026', { x: margin, y, size: 9 });
    y -= 12;
    page.drawText('• Développement logiciel, POO, bases de données, réseaux, cybersécurité', { x: margin + 5, y, size: 9 });
    y -= 12;

    // Skills
    drawSection('Compétences');
    const skills = [
      'Langages : C++, C#, Java, Python, C, JavaScript, PHP, Lua, SQL, Shell',
      'Game Engines & Architecture : Unreal Engine (C++, Blueprint), Unity, Godot, Subsystems, GAS, ECS, IA',
      'Web & Full Stack : HTML/CSS, JavaScript, React, Node.js, PHP, API REST, MVC',
      'Bases de données : SQL, PostgreSQL, MySQL, Modélisation, Optimisation',
      'Mathématiques : Algèbre linéaire, Vecteurs, Matrices, Analyse, Géométrie 3D',
      'Outils : Git, GitHub, Perforce, Linux, Windows, Docker, UML, CI/CD',
    ];
    
    skills.forEach(skill => {
      page.drawText(skill, { x: margin + 5, y, size: 9, maxWidth: 500 });
      y -= 12;
    });

    y -= 8;

    // Projects
    drawSection('Projets - UQAC');

    page.drawText('UE5-MicroGAS-Project (2026) | Unreal Engine 5, C++, GAS', { x: margin, y, size: 9 });
    y -= 11;
    page.drawText('• Architecture GAS complète : GameplayAbilities, Effects, AttributeSets', { x: margin + 5, y, size: 9 });
    y -= 11;
    page.drawText('• Système d\'attributs, abilities complexes, réplication réseau', { x: margin + 5, y, size: 9 });
    y -= 12;

    page.drawText('UE-MultithreadingOptimisation (2026) | C++, Optimisation Performance', { x: margin, y, size: 9 });
    y -= 11;
    page.drawText('• Task Graph, AsyncTasks, ParallelFor pour multi-cores', { x: margin + 5, y, size: 9 });
    y -= 11;
    page.drawText('• Optimisations : génération terrain 200ms→45ms, pathfinding 100+ agents -60%', { x: margin + 5, y, size: 9 });
    y -= 12;

    page.drawText('AmongUs (Collaboratif, 4 dev) (2026) | Unreal Engine, Subsystems', { x: margin, y, size: 9 });
    y -= 11;
    page.drawText('• Architecture modulaire Subsystems, networking multijoueur', { x: margin + 5, y, size: 9 });
    y -= 11;
    page.drawText('• Responsable : Subsystem tâches + système de vote avec UI', { x: margin + 5, y, size: 9 });
    y -= 12;

    page.drawText('SpaceShooter (Collaboratif, 3 dev) (2025) | C++, Mathématiques 2D', { x: margin, y, size: 9 });
    y -= 11;
    page.drawText('• Vecteurs 2D, produit scalaire, courbes Bézier, interpolation réseau', { x: margin + 5, y, size: 9 });
    y -= 11;
    page.drawText('• Optimisation spatiale O(n²)→O(n), collision avec bounding circles', { x: margin + 5, y, size: 9 });

    // New page for more content
    const page2 = pdfDoc.addPage([595, 842]);
    let y2 = 842 - 40;

    const drawText2 = (text, size, color = [0, 0, 0]) => {
      page2.drawText(text, {
        x: margin,
        y: y2 - size,
        size,
        color: rgb(color[0] / 255, color[1] / 255, color[2] / 255),
      });
      y2 -= size + 3;
    };

    const drawSection2 = (title) => {
      y2 -= 8;
      page2.drawText(title.toUpperCase(), {
        x: margin,
        y: y2,
        size: 11,
        color: rgb(0.345, 0.11, 0.53),
      });
      y2 -= 2;
      page2.drawLine({
        start: { x: margin, y: y2 },
        end: { x: 555, y: y2 },
        color: rgb(0.345, 0.11, 0.53),
        thickness: 1,
      });
      y2 -= 10;
    };

    drawSection2('Projets - IUT Orsay');

    drawText2('Pokédex Interactif (2023) | Python, SQLite, API REST, Tkinter', 9);
    drawText2('• Architecture POO, intégration API PokéAPI, base de données SQLite', 9);
    drawText2('• Requêtes SQL dynamiques, gestion erreurs, optimisation', 9);
    y2 -= 4;

    drawText2('Application JO Paris 2024 (Collaboratif) (2024) | Java, Agile, Git', 9);
    drawText2('• Gestion projet Agile, analyse besoins, spécifications techniques', 9);
    drawText2('• Architecture POO, collaboration Git, analyse de rentabilité', 9);
    y2 -= 8;

    drawSection2('Game Jams');
    drawText2('WonderJam UQAC Hiver 2026 - 2ème place | Équipe de 4 (vs 6)', 9);
    drawText2('• Prototypage rapide, game design, gameplay programming', 9);
    drawText2('• Propulsée par Ubisoft, démonstration finale devant jury', 9);
    y2 -= 8;

    drawSection2('Langues');
    drawText2('Français : Langue maternelle | Anglais : Courant (technique) | Chinois : Notions', 9);

    const pdfBytes = await pdfDoc.save();
    
    return new Response(pdfBytes, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Jacques_Wen_CV_Game_Developer.pdf"',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
});