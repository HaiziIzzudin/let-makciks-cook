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
    </head>
	
	<body>
	
		<header>
			<img src="https://github.com/HaiziIzzudin/let-makciks-cook/blob/main/images/logo.png?raw=true"></img>
			<h1>LET MAKCIKS COOK</h1>
		</header>
		
		<section>
			<h2>Western</h2>
			
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
				<tr>
					<td><xsl:value-of select="title"/></td>
					<td><xsl:value-of select="description"/></td>
					<td><xsl:value-of select="by"/></td>
					<td><xsl:value-of select="preptime"/></td>
					<td><xsl:value-of select="kcal"/></td>					
					<td><ul>
						<xsl:for-each select="ingredients/item">  
						<li><xsl:value-of select="."/></li>
						</xsl:for-each>
					</ul></td>
					<td><ol>
						<xsl:for-each select="instructions/step">
						<li><xsl:value-of select="."/></li>
						</xsl:for-each>
					</ol></td>
				</tr>
				</xsl:for-each>
			</table>
			
		</section>
		
	
	</body>
</html>

</xsl:template>

</xsl:stylesheet>  
