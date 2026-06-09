# tsx 파일들에 'use client'; 추가 스크립트 수정본
$componentsDir = "d:\study\portfolio\components"

Get-ChildItem -Path $componentsDir -Filter "*.tsx" | ForEach-Object {
    $filePath = $_.FullName
    $content = Get-Content -Path $filePath -Raw
    
    $checkLen = [System.Math]::Min(100, $content.Length)
    $prefix = $content.Substring(0, $checkLen)
    if (!($prefix -like "*use client*")) {
        Write-Host "Adding 'use client' to: $($_.Name)"
        $newContent = "'use client';`r`n" + $content
        Set-Content -Path $filePath -Value $newContent -NoNewline
    }
}
