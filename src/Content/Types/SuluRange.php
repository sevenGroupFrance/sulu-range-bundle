<?php

namespace SevenGroupFrance\SuluRangeBundle\Content\Types;

use Sulu\Component\Content\SimpleContentType;

class SuluRange extends SimpleContentType
{
    public function __construct()
    {
        parent::__construct("range");
    }
}
