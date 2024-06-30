<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
	<html>
		<body style="background-color:#FF7D29">
		<br>
		<center><h1>LET MAKCIKS COOK MENU DETAILS</h1></center>
		<center><h2>WESTERN</h2></center>
		</br>
		<center>
		<table border="3">
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
		</center>
		
		<br>
		<center><h2>ASIAN</h2></center>
		</br>
		<center>
		<table border="3">
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
		</center>
		
		<br>
		<center><h2>MIDDLE EAST</h2></center>
		</br>
		<center>
		<table border="3">
			<tr bgcolor="FFEEA9">
			<th>TITLE</th>
			<th>DESCRIPTION</th>
			<th>BY</th>
			<th>PREPTIME</th>
			<th>KCAL</th>
			<th>INGREDIENTS</th>
			<th>INSTRUCTIONS</th>
			</tr>
			
			<xsl:for-each select="recipe/middleeast/menu">
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
		</center>
		
		</body>
	</html>

</xsl:template>
</xsl:stylesheet>  
