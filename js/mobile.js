$("#kusamayayoimobile").click(function () {
  $("#artistNamemobile").text("Yayoi Kusama");
  $("#imagemobile img").attr("src", "./image/kusamayayoi/kusamayayoi.jpg.webp");
  $("#intromobile").text(
    "Yayoi Kusama (born March 22, 1929) is a Japanese contemporary artist who works primarily in sculpture and installation, but is also active in painting, performance, video art, fashion, poetry, fiction, and other arts. Her work is based in conceptual art and shows some attributes of feminism, minimalism, surrealism, Art Brut, pop art, and abstract expressionism, and is infused with autobiographical, psychological, and sexual content. She has been acknowledged as one of the most important living artists to come out of Japan."
  );
  $(".right-outter").css("right", "0");
});

$("#jasperjohnsmobile").click(function () {
  $("#artistNamemobile").text("Jasper Johns");
  $("#imagemobile img").attr("src", "./image/jasperjohns/JJ.jpeg");
  $("#intromobile").text(
    "Jasper Johns (born May 15, 1930) is an American painter, sculptor, and printmaker whose work is associated with abstract expressionism, Neo-Dada, and pop art. He is well known for his depictions of the American flag and other US-related topics. Johns's works regularly sell for millions of dollars at sale and auction, including a reported $110 million sale in 2010. At multiple times works by Johns have held the title of most paid for a work by a living artist."
  );
  $(".right-outter").css("right", "0");
});

$("#claesoldenburgmobile").click(function () {
  $("#artistNamemobile").text("Claes Oldenburg");
  $("#imagemobile img").attr("src", "./image/claesoldenburg/CO.jpeg");
  $("#intromobile").text(
    "Claes Oldenburg (January 28, 1929 – July 18, 2022) was a Swedish-born American sculptor, best known for his public art installations typically featuring large replicas of everyday objects. Another theme in his work is soft sculpture versions of everyday objects. Many of his works were made in collaboration with his wife, Coosje van Bruggen, who died in 2009; they had been married for 32 years. Oldenburg lived and worked in New York City."
  );
  $(".right-outter").css("right", "0");
});

$("#richardhamiltonmobile").click(function () {
  $("#artistNamemobile").text("Richard Hamilton");
  $("#imagemobile img").attr("src", "./image/richardhamilton/RH.jpeg");
  $("#intromobile").text(
    "Richard William Hamilton CH (February 24, 1922 – September 13, 2011) was an English painter and collage artist. His 1955 exhibition Man, Machine and Motion (Hatton Gallery, Newcastle upon Tyne) and his 1956 collage Just what is it that makes today's homes so different, so appealing?, produced for the This Is Tomorrow exhibition of the Independent Group in London, are considered by critics and historians to be among the earliest works of pop art. A major retrospective of his work was at Tate Modern until May 2014."
  );
  $(".right-outter").css("right", "0");
});

$("#andywarholmobile").click(function () {
  $("#artistNamemobile").text("Andy Warhol");
  $("#imagemobile img").attr("src", "./image/andywarhol/andy.jpeg");
  $("#intromobile").text(
    "Andy Warhol (August 6, 1928 – February 22, 1987) was an American visual artist, film director, and producer who was a leading figure in the visual art movement known as pop art. His works explore the relationship between artistic expression, advertising, and celebrity culture that flourished by the 1960s, and span a variety of media, including painting, silkscreening, photography, film, and sculpture."
  );
  $(".right-outter").css("right", "0");
});

$(".backbutton").click(function () {
  $(".right-outter").css("right", "-100%");
});
