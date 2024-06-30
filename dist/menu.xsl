<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">

<html>
	
	<head>
        <meta charset="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>Let Makciks Cook | XML Data</title>
        <link rel="stylesheet" href="xml.css"></link>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"></link>
				<link href="https://res.cloudinary.com/finnhvman/raw/upload/matter/matter-0.2.2.css" rel="stylesheet"></link>
    </head>

	<body>

		
	
		<header>
			<img src="https://github.com/HaiziIzzudin/let-makciks-cook/blob/main/images/logo.png?raw=true"></img>
			<h1>LET MAKCIKS COOK</h1>
		</header>

		<button class="matter-button-contained"
			onclick="window.location.href = 'https://haiziizzudin.github.io/let-makciks-cook/'">
			<i class="fa-solid fa-arrow-left"></i>Return to Let Makciks Cook
		</button>
		
		<section>
			<h2>WESTERN</h2>
			
			<table>
				<tr bgcolor="FFEEA9">
				<th>TITLE</th>
				<th>DESCRIPTION</th>
				<th>BY</th>
				<th>PREPTIME</th>
				<th>KCAL</th>
				<th>INGREDIENTS</th>
				<th>INSTRUCTIONS</th>
				</tr>
				
				<xsl:for-each select="recipe/western/menu">
				<tr style="text-align:justify;">
				
					<td><xsl:value-of select="title"/></td>
					<td><xsl:value-of select="description"/></td>
					<td><xsl:value-of select="by"/></td>
					<td><xsl:value-of select="preptime"/></td>
					<td><xsl:value-of select="kcal"/></td>
					
					<td>
					<ul>
						<xsl:for-each select="ingredients/item">  
						<li><xsl:value-of select="."/></li>
						</xsl:for-each>
					</ul>
					</td>

					<td>
					<ol>
						<xsl:for-each select="instructions/step">
						<li><xsl:value-of select="."/></li>
						</xsl:for-each>
					</ol>
					</td>
				</tr>
				</xsl:for-each>
			
			</table>
		</section>
		
		<section>
			<h2>ASIAN</h2>
			
			<table>
				<tr bgcolor="FFEEA9">
				<th>TITLE</th>
				<th>DESCRIPTION</th>
				<th>BY</th>
				<th>PREPTIME</th>
				<th>KCAL</th>
				<th>INGREDIENTS</th>
				<th>INSTRUCTIONS</th>
				</tr>
				
				<xsl:for-each select="recipe/asian/menu">
				<tr style="text-align:justify;">
				
					<td><xsl:value-of select="title"/></td>
					<td><xsl:value-of select="description"/></td>
					<td><xsl:value-of select="by"/></td>
					<td><xsl:value-of select="preptime"/></td>
					<td><xsl:value-of select="kcal"/></td>
					
					<td>
					<ul>
						<xsl:for-each select="ingredients/item">  
						<li><xsl:value-of select="."/></li>
						</xsl:for-each>
					</ul>
					</td>

					<td>
					<ol>
						<xsl:for-each select="instructions/step">
						<li><xsl:value-of select="."/></li>
						</xsl:for-each>
					</ol>
					</td>
				</tr>
				</xsl:for-each>
			
			</table>
		</section>
		
		
		
		
		<section>
			<h2>MIDDLE EAST</h2>
			
			<table>
				<tr bgcolor="FFEEA9">
				<th>TITLE</th>
				<th>DESCRIPTION</th>
				<th>BY</th>
				<th>PREPTIME</th>
				<th>KCAL</th>
				<th>INGREDIENTS</th>
				<th>INSTRUCTIONS</th>
				</tr>
				
				<xsl:for-each select="recipe/asian/menu">
				<tr style="text-align:justify;">
				
					<td><xsl:value-of select="title"/></td>
					<td><xsl:value-of select="description"/></td>
					<td><xsl:value-of select="by"/></td>
					<td><xsl:value-of select="preptime"/></td>
					<td><xsl:value-of select="kcal"/></td>
					
					<td>
					<ul>
						<xsl:for-each select="ingredients/item">  
						<li><xsl:value-of select="."/></li>
						</xsl:for-each>
					</ul>
					</td>

					<td>
					<ol>
						<xsl:for-each select="instructions/step">
						<li><xsl:value-of select="."/></li>
						</xsl:for-each>
					</ol>
					</td>
				</tr>
				</xsl:for-each>
			
			</table>
		</section>
	
	
	
	
	
	
	</body>
</html>

</xsl:template>

</xsl:stylesheet>  
