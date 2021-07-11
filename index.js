







function is_row(){
    let c;
    for(c=0;c<9;c++){
        if(grid[row][c]==num){
            return true;
        }
    }
    return false;
}
function is_col(){
    let r;
    for(r=0;r<9;r++){
        if(grid[r][col]==num){
            return true;
        }
    }
    return false;
}

function is_box()
{
    var row;
    var col;
	for (row = 0; row < 3; row++)
		for (col = 0; col < 2; col++)
			if (grid[row + box_start_row][col + box_start_col] == num) 
			{
				return true;
			}
	return false;
}

function is_safe(int,int,int,int){
    if(!is_row(grid,row,num) && !is_col(grid,row,num) && !is_box(grid,row-row%3,col-col%3,num)){
    return true;
    }else{
        return false;
    }
}

function empty_entry(grid){
    var i;
    var j;
    var arr=[0,0];
    for(i=0;i<9;i++){
        for(j=0;j<9;j++){
            if(grid[i][j]==0){
                arr[0]=i;
                arr[1]=j;
                return arr;
            }
        }
    }
}

function solve(grid){
    if(grid[9][9]==empty_entry()){
        return true;
    }

    var row_col=[0,0];
    row_col=empty_entry;
    var row=row_col[0];
    var col=row_col[1];
    var num;
    for(num=1;num<=9;num++){
        if(is_safe(grid,row,col,num)){

            grid[row][col]=num;

            if(solve()){
                return true;
            }
            grid[row][col]=0;
        }
    }
    return false;
}

function trigger(){
    var grid=[
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0]
        ];
        grid[0][0]=document.getElementById("b11").value;Number(grid[0][0]);
        grid[0][1]=document.getElementById("b12").value;Number(grid[0][1]);
        grid[0][2]=document.getElementById("b13").value;Number(grid[0][2]);
        grid[0][3]=document.getElementById("b14").value;Number(grid[0][3]);
        grid[0][4]=document.getElementById("b15").value;Number(grid[0][4]);
        grid[0][5]=document.getElementById("b16").value;Number(grid[0][5]);
        grid[0][6]=document.getElementById("b17").value;Number(grid[0][6]);
        grid[0][7]=document.getElementById("b18").value;Number(grid[0][7]);
        grid[0][8]=document.getElementById("b19").value;Number(grid[0][8]);
        grid[1][0]=document.getElementById("b21").value;Number(grid[1][0]);
        grid[1][1]=document.getElementById("b22").value;Number(grid[1][1]);
        grid[1][2]=document.getElementById("b23").value;Number(grid[1][2]);
        grid[1][3]=document.getElementById("b24").value;Number(grid[1][3]);
        grid[1][4]=document.getElementById("b25").value;Number(grid[1][4]);
        grid[1][5]=document.getElementById("b26").value;Number(grid[1][5]);
        grid[1][6]=document.getElementById("b27").value;Number(grid[1][6]);
        grid[1][7]=document.getElementById("b28").value;Number(grid[1][7]);
        grid[1][8]=document.getElementById("b29").value;Number(grid[1][8]);
        grid[2][0]=document.getElementById("b31").value;Number(grid[2][0]);
        grid[2][1]=document.getElementById("b32").value;Number(grid[2][1]);
        grid[2][2]=document.getElementById("b33").value;Number(grid[2][2]);
        grid[2][3]=document.getElementById("b34").value;Number(grid[2][3]);
        grid[2][4]=document.getElementById("b35").value;Number(grid[2][4]);
        grid[2][5]=document.getElementById("b36").value;Number(grid[2][5]);
        grid[2][6]=document.getElementById("b37").value;Number(grid[2][6]);
        grid[2][7]=document.getElementById("b38").value;Number(grid[2][7]);
        grid[2][8]=document.getElementById("b39").value;Number(grid[2][8]);
        grid[3][0]=document.getElementById("b41").value;Number(grid[3][0]);
        grid[3][1]=document.getElementById("b42").value;Number(grid[3][1]);
        grid[3][2]=document.getElementById("b43").value;Number(grid[3][2]);
        grid[3][3]=document.getElementById("b44").value;Number(grid[3][3]);
        grid[3][4]=document.getElementById("b45").value;Number(grid[3][4]);
        grid[3][5]=document.getElementById("b46").value;Number(grid[3][5]);
        grid[3][6]=document.getElementById("b47").value;Number(grid[3][6]);
        grid[3][7]=document.getElementById("b48").value;Number(grid[3][7]);
        grid[3][8]=document.getElementById("b49").value;Number(grid[3][8]);
        grid[4][0]=document.getElementById("b51").value;Number(grid[4][0]);
        grid[4][1]=document.getElementById("b52").value;Number(grid[4][1]);
        grid[4][2]=document.getElementById("b53").value;Number(grid[4][2]);
        grid[4][3]=document.getElementById("b54").value;Number(grid[4][3]);
        grid[4][4]=document.getElementById("b55").value;Number(grid[4][4]);
        grid[4][5]=document.getElementById("b56").value;Number(grid[4][5]);
        grid[4][6]=document.getElementById("b57").value;Number(grid[4][6]);
        grid[4][7]=document.getElementById("b58").value;Number(grid[4][7]);
        grid[4][8]=document.getElementById("b59").value;Number(grid[4][8]);
        grid[5][0]=document.getElementById("b61").value;Number(grid[5][0]);
        grid[5][1]=document.getElementById("b62").value;Number(grid[5][1]);
        grid[5][2]=document.getElementById("b63").value;Number(grid[5][2]);
        grid[5][3]=document.getElementById("b64").value;Number(grid[5][3]);
        grid[5][4]=document.getElementById("b65").value;Number(grid[5][4]);
        grid[5][5]=document.getElementById("b66").value;Number(grid[5][5]);
        grid[5][6]=document.getElementById("b67").value;Number(grid[5][6]);
        grid[5][7]=document.getElementById("b68").value;Number(grid[5][7]);
        grid[5][8]=document.getElementById("b69").value;Number(grid[5][8]);
        grid[6][0]=document.getElementById("b71").value;Number(grid[6][0]);
        grid[6][1]=document.getElementById("b72").value;Number(grid[6][1]);
        grid[6][2]=document.getElementById("b73").value;Number(grid[6][2]);
        grid[6][3]=document.getElementById("b74").value;Number(grid[6][3]);
        grid[6][4]=document.getElementById("b75").value;Number(grid[6][4]);
        grid[6][5]=document.getElementById("b76").value;Number(grid[6][5]);
        grid[6][6]=document.getElementById("b77").value;Number(grid[6][6]);
        grid[6][7]=document.getElementById("b78").value;Number(grid[6][7]);
        grid[6][8]=document.getElementById("b79").value;Number(grid[6][8]);
        grid[7][0]=document.getElementById("b81").value;Number(grid[7][0]);
        grid[7][1]=document.getElementById("b82").value;Number(grid[7][1]);
        grid[7][2]=document.getElementById("b83").value;Number(grid[7][2]);
        grid[7][3]=document.getElementById("b84").value;Number(grid[7][3]);
        grid[7][4]=document.getElementById("b85").value;Number(grid[7][4]);
        grid[7][5]=document.getElementById("b86").value;Number(grid[7][5]);
        grid[7][6]=document.getElementById("b87").value;Number(grid[7][6]);
        grid[7][7]=document.getElementById("b88").value;Number(grid[7][7]);
        grid[7][8]=document.getElementById("b89").value;Number(grid[7][8]);
        grid[8][0]=document.getElementById("b91").value;Number(grid[8][0]);
        grid[8][1]=document.getElementById("b92").value;Number(grid[8][1]);
        grid[8][2]=document.getElementById("b93").value;Number(grid[8][2]);
        grid[8][3]=document.getElementById("b94").value;Number(grid[8][3]);
        grid[8][4]=document.getElementById("b95").value;Number(grid[8][4]);
        grid[8][5]=document.getElementById("b96").value;Number(grid[8][5]);
        grid[8][6]=document.getElementById("b97").value;Number(grid[8][6]);
        grid[8][7]=document.getElementById("b98").value;Number(grid[8][7]);
        grid[8][8]=document.getElementById("b99").value;Number(grid[8][8]);


}